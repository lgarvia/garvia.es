const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
    // Prevent directory traversal
    const safePath = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');

    let filePath = '.' + safePath;
    if (filePath === './' || filePath === '.') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('Archivo no encontrado');
            } else {
                res.writeHead(500);
                res.end('Error del servidor: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const os = require('os');

// ... (previous code) ...

server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n¡Servidor listo!`);
    console.log(`--------------------------------------------------`);
    console.log(`Para entrar desde este ordenador:`);
    console.log(`   http://localhost:${PORT}`);
    console.log(`\nPara entrar desde el MÓVIL (conectado al mismo WiFi):`);

    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            // Skip internal (127.0.0.1) and non-IPv4 addresses
            if (iface.family === 'IPv4' && !iface.internal) {
                console.log(`   http://${iface.address}:${PORT}`);
            }
        }
    }
    console.log(`--------------------------------------------------\n`);
});
