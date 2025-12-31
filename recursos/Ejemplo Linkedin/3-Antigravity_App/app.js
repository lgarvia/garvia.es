const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 2000; // Adjust for performance if needed
let mouse = { x: -1000, y: -1000 };
let isMouseDown = false;

// Color palettes
const colorsGravity = ['#1e293b', '#334155', '#475569'];
const colorsAnti = ['#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef'];

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * height; // Start spread out
    }

    reset() {
        this.x = Math.random() * width;
        this.y = isMouseDown ? height + 10 : -10; // Spawn from bottom if antigravity
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() * 2) + 2; // Initial gravity speed
        this.size = Math.random() * 3 + 1;
        this.color = colorsGravity[Math.floor(Math.random() * colorsGravity.length)];
        this.friction = 0.95;
    }

    update() {
        // Physics
        if (isMouseDown) {
            // Antigravity Mode
            this.vy -= 0.5; // Accelerate upwards
            this.color = colorsAnti[Math.floor(Math.random() * colorsAnti.length)];

            // Swirl towards center effect
            const dx = (width / 2) - this.x;
            this.vx += dx * 0.001;
        } else {
            // Gravity Mode
            this.vy += 0.2; // Accelerate downwards
            if (this.vy > 10) this.vy = 10; // Terminal velocity
            this.color = colorsGravity[Math.floor(Math.random() * colorsGravity.length)];
        }

        // Mouse interaction (Repulsion)
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (distance < maxDist) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (maxDist - distance) / maxDist;
            const direction = isMouseDown ? -1 : 1; // Attract in antigravity mode, repel in normal

            this.vx += forceDirectionX * force * 5 * direction;
            this.vy += forceDirectionY * force * 5 * direction;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Friction
        this.vx *= this.friction; /* air resistance */

        // Reset if out of bounds
        if (!isMouseDown) {
            if (this.y > height + 10) {
                this.y = -10;
                this.x = Math.random() * width;
                this.vy = (Math.random() * 2) + 2;
                this.vx = (Math.random() - 0.5) * 2;
            }
        } else {
            if (this.y < -10) {
                this.y = height + 10;
                this.x = Math.random() * width;
                this.vy = -(Math.random() * 2) - 2;
                this.vx = (Math.random() - 0.5) * 2;
            }
        }

        // Wrap X
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function init() {
    resize();
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    animate();
}

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function animate() {
    // Trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, width, height);

    // Global Composite for glow
    ctx.globalCompositeOperation = isMouseDown ? 'lighter' : 'source-over';

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

// Event Listeners
window.addEventListener('resize', resize);
window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
window.addEventListener('mousedown', () => isMouseDown = true);
window.addEventListener('mouseup', () => isMouseDown = false);
window.addEventListener('touchstart', () => isMouseDown = true);
window.addEventListener('touchend', () => isMouseDown = false);

init();
