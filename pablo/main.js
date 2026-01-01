import * as THREE from 'three';
import { componentIcons } from './assets.js';

// --- STATE MANAGEMENT ---
let currentTab = 'circuits';
let isWireMode = false;
let activeWireStart = null;
let wires = [];
let currentTutorialStep = 0;
let currentTutorial = null;

// --- TAB NAVIGATION ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        currentTab = btn.dataset.tab;

        if (currentTab === 'circuits') {
            setTimeout(() => {
                onWindowResize();
                // Force re-render of current scene
                const activeCircuitParams = document.querySelector('.circuit-select.active');
                if (activeCircuitParams) loadScene(activeCircuitParams.dataset.circuit);
                else loadScene('blink');
            }, 100);
        }
    });
});

// --- CIRCUIT DESCRIPTIONS & CODE (ESPAÑOL) ---
const circuitsInfo = {
    blink: {
        title: "Parpadeo (Blink)",
        code: `void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}`,
        tutorial: [
            "1. Coloca el Arduino Uno en la mesa.",
            "2. Añade un LED Rojo y una Resistencia de 220Ω.",
            "3. Conecta el Pin 13 del Arduino a una pata de la resistencia.",
            "4. Conecta la otra pata de la resistencia al Ánodo (+) del LED (pata larga).",
            "5. Conecta el Cátodo (-) del LED a GND (Tierra) en el Arduino.",
            "6. ¡Listo! El LED debería parpadear."
        ]
    },
    servo: {
        title: "Control Servo",
        code: `#include <Servo.h>\nServo myservo;\nvoid setup() {\n  myservo.attach(9);\n}\nvoid loop() {\n  myservo.write(90);\n  delay(1000);\n  myservo.write(0);\n  delay(1000);\n}`,
        tutorial: [
            "1. Necesitarás un Arduino y un micro servomotor.",
            "2. Conecta el cable Rojo del servo a 5V.",
            "3. Conecta el cable Marrón (o Negro) a GND.",
            "4. Conecta el cable Naranja (señal) al Pin 9.",
            "5. Al cargar el código, el brazo debería moverse de 0 a 90 grados."
        ]
    },
    motor: {
        title: "Motor DC",
        code: `int motorPin = 3;\nvoid setup() {\n  pinMode(motorPin, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(motorPin, HIGH);\n  delay(2000);\n  digitalWrite(motorPin, LOW);\n  delay(1000);\n}`,
        tutorial: [
            "1. Usa una Batería de 9V para dar fuerza al motor.",
            "2. Conecta el positivo (+) de la batería a un pin del motor.",
            "3. Conecta el otro pin del motor al Colector de un Transistor.",
            "4. Conecta el Emisor del Transistor a GND.",
            "5. Conecta la Base del Transistor al Pin 3 del Arduino (con una resistencia).",
            "6. ¡Cuidado con los dedos cuando gire!"
        ]
    }
};

document.querySelectorAll('.circuit-select').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.circuit-select').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const key = btn.dataset.circuit;
        if (circuitsInfo[key]) {
            document.getElementById('arduino-code').textContent = circuitsInfo[key].code;
            loadScene(key);
        }
    });
});

// --- 3D SCENE MANAGER ---
const canvasContainer = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202025); // Dark gray studio background
const camera = new THREE.PerspectiveCamera(45, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });

renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
canvasContainer.appendChild(renderer.domElement);

// Lighting
const ambLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambLight);
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(10, 20, 10);
spotLight.castShadow = true;
scene.add(spotLight);

// Orbit Controls Logic (Simple Custom)
let isDragging3D = false;
let previousMousePosition = { x: 0, y: 0 };
const rootGroup = new THREE.Group(); // Holds current scene content
scene.add(rootGroup);

canvasContainer.addEventListener('mousedown', (e) => {
    isDragging3D = true;
    previousMousePosition = { x: e.offsetX, y: e.offsetY };
});
window.addEventListener('mouseup', () => isDragging3D = false);
canvasContainer.addEventListener('mousemove', (e) => {
    if (isDragging3D) {
        const deltaX = e.offsetX - previousMousePosition.x;
        const deltaY = e.offsetY - previousMousePosition.y;
        rootGroup.rotation.y += deltaX * 0.01;
        rootGroup.rotation.x += deltaY * 0.01;
        previousMousePosition = { x: e.offsetX, y: e.offsetY };
    }
});

// --- 3D HELPERS ---
function createWire(p1, p2, color = 0x00f3ff) {
    // Create a nice curve
    const curve = new THREE.CatmullRomCurve3([
        p1,
        new THREE.Vector3(p1.x, p1.y + 1, p1.z), // control point up
        new THREE.Vector3(p2.x, p2.y + 1, p2.z), // control point up
        p2
    ]);
    const geo = new THREE.TubeGeometry(curve, 20, 0.03, 8, false);
    const mat = new THREE.MeshStandardMaterial({ color: color });
    return new THREE.Mesh(geo, mat);
}

// --- 3D COMPONENT BUILDERS ---
const matPCB = new THREE.MeshStandardMaterial({ color: 0x008080, roughness: 0.5 });
const matBlack = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.6 });
const matSilver = new THREE.MeshStandardMaterial({ color: 0xAAAAAA, metalness: 0.8, roughness: 0.2 });
const matRedPlastic = new THREE.MeshStandardMaterial({ color: 0xFF0000 });
const matBluePlastic = new THREE.MeshStandardMaterial({ color: 0x0000FF });

function createArduino() {
    const grp = new THREE.Group();
    // PCB
    const pcb = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.2, 3.2), matPCB);
    grp.add(pcb);
    // USB
    const usb = new THREE.Mesh(new THREE.BoxGeometry(1, 0.6, 0.8), matSilver);
    usb.position.set(-1.8, 0.4, -0.8);
    grp.add(usb);
    // Chip
    const chip = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 0.6), matBlack);
    chip.position.set(0.5, 0.15, 0.2);
    chip.rotation.z = 0.05;
    grp.add(chip);
    // Headers
    const h1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 3), matBlack);
    h1.position.set(-0.5, 0.3, -1.3);
    grp.add(h1);
    const h2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 3), matBlack);
    h2.position.set(1.5, 0.3, 1.3);
    grp.add(h2);
    return grp;
}

function createBreadboard() {
    const grp = new THREE.Group();
    const base = new THREE.Mesh(new THREE.BoxGeometry(5, 0.2, 8), new THREE.MeshStandardMaterial({ color: 0xF5F5F5 }));
    grp.add(base);
    // Simple fake holes texture/grid
    const stripeRed = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.21, 8), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    stripeRed.position.set(-2, 0, 0);
    grp.add(stripeRed);
    const stripeBlue = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.21, 8), new THREE.MeshBasicMaterial({ color: 0x0000FF }));
    stripeBlue.position.set(-2.3, 0, 0);
    grp.add(stripeBlue);
    return grp;
}

function createLED(color = 0xFF0000) {
    const grp = new THREE.Group();
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.6 }));
    bulb.position.y = 0.5;
    grp.add(bulb);
    const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1), matSilver);
    legs.position.y = 0;
    grp.add(legs);
    return grp;
}

function createServo() {
    const grp = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1, 0.8), matBluePlastic);
    grp.add(body);
    const horn = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 0.3), new THREE.MeshStandardMaterial({ color: 0xFFFFFF }));
    horn.position.set(0.5, 0.8, 0);
    grp.add(horn);
    return grp;
}

function createLabels(items) {
    // Clear previous labels (simplified: in a real app would remove DOM elements)
    document.querySelectorAll('.scene-label').forEach(e => e.remove());

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'scene-label';
        div.innerText = item.text;
        div.style.position = 'absolute';
        div.style.background = 'rgba(0,0,0,0.6)';
        div.style.color = '#00f3ff';
        div.style.padding = '4px 8px';
        div.style.borderRadius = '4px';
        div.style.border = '1px solid #00f3ff';
        div.style.fontSize = '12px';
        div.style.pointerEvents = 'none';

        canvasContainer.appendChild(div);

        // Animate label position
        function update() {
            if (!div.isConnected) return;
            const v = item.pos.clone().project(camera);
            const x = (v.x * .5 + .5) * canvasContainer.clientWidth;
            const y = (-(v.y * .5) + .5) * canvasContainer.clientHeight;
            div.style.left = `${x}px`;
            div.style.top = `${y}px`;
            requestAnimationFrame(update);
        }
        update();
    });
}

function loadScene(type) {
    // Clear Scene
    while (rootGroup.children.length > 0) {
        rootGroup.remove(rootGroup.children[0]);
    }

    // Build Scene
    camera.position.set(0, 8, 8);
    camera.lookAt(0, 0, 0);
    rootGroup.rotation.set(0, 0, 0);

    const arduino = createArduino();
    rootGroup.add(arduino);

    let labels = [{ text: "Arduino Uno", pos: new THREE.Vector3(0, 1, 0) }];

    if (type === 'blink') {
        const led = createLED(0xFF0000);
        led.position.set(2.5, 0.5, 3);
        rootGroup.add(led);

        const bb = createBreadboard();
        bb.position.set(0, -0.5, 4);
        arduino.position.set(-2, 0, -1);
        rootGroup.add(bb);

        // Wires
        const wire1 = createWire(new THREE.Vector3(-1.5, 0.3, -2.4), new THREE.Vector3(2.5, 0.2, 2.5), 0xFF0000); // 13 -> LED
        const wire2 = createWire(new THREE.Vector3(-0.5, 0.3, 0.2), new THREE.Vector3(2.5, 0.2, 3.5), 0x000000); // GND -> LED
        rootGroup.add(wire1);
        rootGroup.add(wire2);

        labels.push({ text: "LED (Pin 13)", pos: new THREE.Vector3(2.5, 1.5, 3) });
        labels.push({ text: "Protoboard", pos: new THREE.Vector3(0, 0, 5) });
    } else if (type === 'servo') {
        const servo = createServo();
        servo.position.set(3, 0.5, 0);
        rootGroup.add(servo);

        const w1 = createWire(new THREE.Vector3(1.5, 0.3, 0.3), new THREE.Vector3(3, 0.5, -0.5), 0xFFA500);
        const w2 = createWire(new THREE.Vector3(1.5, 0.3, -1), new THREE.Vector3(3, 0.5, 0), 0xFF0000);
        const w3 = createWire(new THREE.Vector3(-0.5, 0.3, 0.3), new THREE.Vector3(3, 0.5, 0.5), 0x330000);
        rootGroup.add(w1); rootGroup.add(w2); rootGroup.add(w3);

        labels.push({ text: "Servo (Pin 9)", pos: new THREE.Vector3(3, 1.5, 0) });
    } else if (type === 'motor') {
        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.5), matSilver);
        motor.rotation.z = Math.PI / 2;
        motor.position.set(3, 0.5, 0);
        rootGroup.add(motor);

        // Fan
        const fanInfo = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.5, 0.2), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        fanInfo.position.set(3.8, 0.5, 0);
        rootGroup.add(fanInfo);

        labels.push({ text: "Motor DC", pos: new THREE.Vector3(3, 1.5, 0) });
    }

    createLabels(labels);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', onWindowResize);
function onWindowResize() {
    if (!canvasContainer) return;
    const w = canvasContainer.clientWidth;
    const h = canvasContainer.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

// Ensure initial load
loadScene('blink');


// --- INVENTORY & WORKBENCH LOGIC ---
const inventoryData = [
    { id: 1, name: 'Arduino Uno', type: 'arduino', count: 1 },
    { id: 2, name: 'LED Rojo', type: 'led_red', count: 10 },
    { id: 3, name: 'Resistencia', type: 'resistor', count: 20 },
    { id: 4, name: 'Servomotor', type: 'servo', count: 2 },
    { id: 5, name: 'Protoboard', type: 'breadboard', count: 1 },
    { id: 6, name: 'Batería 9V', type: 'battery9v', count: 1 },
    { id: 7, name: 'Pulsador', type: 'button', count: 5 },
    { id: 8, name: 'Buzzer', type: 'buzzer', count: 2 },
    { id: 9, name: 'Fotoresistor', type: 'photoresistor', count: 3 }
];
const componentSource = document.getElementById('component-source');
const inventoryGrid = document.getElementById('inventory-grid');
const dropZone = document.getElementById('drop-zone');

// Initial Render
function initialRender() {
    inventoryGrid.innerHTML = '';
    componentSource.innerHTML = '';

    inventoryData.forEach(item => {
        // Tab 2 Grid
        if (inventoryGrid) {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `<div class="item-icon-svg">${componentIcons[item.type] || '📦'}</div><h3>${item.name}</h3>`;
            inventoryGrid.appendChild(card);
        }
        // Tab 3 Sidebar
        if (componentSource) {
            const dragItem = document.createElement('div');
            dragItem.className = 'draggable-item';
            dragItem.draggable = true;
            dragItem.innerHTML = `<div class="mini-icon">${componentIcons[item.type]}</div> ${item.name}`;
            dragItem.addEventListener('dragstart', (e) => e.dataTransfer.setData('type', item.type));
            componentSource.appendChild(dragItem);
        }
    });
}
initialRender();

// Workbench Controls
const assemblyArea = document.querySelector('.assembly-area');
const toolsDiv = document.createElement('div');
toolsDiv.className = 'workbench-tools';
toolsDiv.innerHTML = `
  <button id="tool-pointer" class="tool-btn active">🖐️ Mover</button>
  <button id="tool-wire" class="tool-btn">🔌 Cablear</button>
  <button id="show-tutorial" class="tool-btn highlight">📚 Instrucciones</button>
  <button id="clear-bench" class="tool-btn warning">🗑️ Limpiar</button>
`;
if (!document.querySelector('.workbench-tools')) assemblyArea.appendChild(toolsDiv);

// Tutorials Modal
const tutModal = document.createElement('div');
tutModal.className = 'tutorial-panel';
tutModal.innerHTML = `
  <h3>Instrucciones de Montaje</h3>
  <div id="tut-steps"></div>
  <button id="close-tut">Cerrar</button>
`;
assemblyArea.appendChild(tutModal);

document.getElementById('tool-pointer').onclick = (e) => { isWireMode = false; updateTools(e.target); };
document.getElementById('tool-wire').onclick = (e) => { isWireMode = true; updateTools(e.target); };
document.getElementById('show-tutorial').onclick = (e) => {
    const steps = circuitsInfo['blink'].tutorial; // Default
    const stepContainer = document.getElementById('tut-steps');
    stepContainer.innerHTML = steps.map(s => `<p>${s}</p>`).join('');
    tutModal.classList.add('visible');
};
document.getElementById('close-tut').onclick = () => tutModal.classList.remove('visible');
document.getElementById('clear-bench').onclick = () => { dropZone.innerHTML = ''; wires = []; renderWires(); updateSimulation(); };

function updateTools(btn) {
    document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    dropZone.style.cursor = isWireMode ? 'crosshair' : 'default';
}

// SVG Layer
const svgLayer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgLayer.style.position = 'absolute';
svgLayer.style.width = '100%';
svgLayer.style.height = '100%';
svgLayer.style.pointerEvents = 'none';
svgLayer.style.zIndex = '5';
dropZone.appendChild(svgLayer);

function renderWires() {
    svgLayer.innerHTML = '';
    wires.forEach(w => {
        if (!document.body.contains(w.startEl) || !document.body.contains(w.endEl)) return;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        const r1 = w.startEl.getBoundingClientRect();
        const r2 = w.endEl.getBoundingClientRect();
        const zone = dropZone.getBoundingClientRect();
        line.setAttribute('x1', r1.left - zone.left + 40);
        line.setAttribute('y1', r1.top - zone.top + 40);
        line.setAttribute('x2', r2.left - zone.left + 40);
        line.setAttribute('y2', r2.top - zone.top + 40);
        line.setAttribute('stroke', '#007bff');
        line.setAttribute('stroke-width', '4');
        svgLayer.appendChild(line);
    });
}

// SIMULATION LOGIC: If connected to power source, activate.
function updateSimulation() {
    // 1. Reset all
    document.querySelectorAll('.placed-component').forEach(el => el.classList.remove('on'));

    // 2. Find sources (Arduino or Battery)
    const sources = [];
    document.querySelectorAll('.placed-component').forEach(el => {
        const t = el.dataset.type;
        if (t === 'arduino' || t === 'battery9v') sources.push(el);
    });

    // 3. Mark sources as on (active)
    sources.forEach(s => s.classList.add('on'));

    // 4. Propagate power via wires (Simple BFS)
    let queue = [...sources];
    let visited = new Set(sources);

    while (queue.length > 0) {
        const curr = queue.shift();

        // Find neighbors connected by wires
        wires.forEach(w => {
            let neighbor = null;
            if (w.startEl === curr && !visited.has(w.endEl)) neighbor = w.endEl;
            else if (w.endEl === curr && !visited.has(w.startEl)) neighbor = w.startEl;

            if (neighbor) {
                visited.add(neighbor);
                neighbor.classList.add('on');
                queue.push(neighbor);
            }
        });
    }
}

// Drag & Drop
dropZone.addEventListener('dragover', e => e.preventDefault());
dropZone.addEventListener('drop', e => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    if (!type) return;
    const rect = dropZone.getBoundingClientRect();
    createComponent(type, e.clientX - rect.left - 40, e.clientY - rect.top - 40);
});

function createComponent(type, x, y) {
    const el = document.createElement('div');
    el.className = 'placed-component';
    el.innerHTML = componentIcons[type];
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.dataset.type = type;

    el.addEventListener('mousedown', (e) => {
        if (isWireMode) {
            if (!activeWireStart) {
                activeWireStart = el;
                el.style.borderColor = 'cyan';
            } else {
                if (activeWireStart !== el) {
                    wires.push({ startEl: activeWireStart, endEl: el });
                    renderWires();
                    updateSimulation(); // Check logic on new wire
                }
                activeWireStart.style.borderColor = '';
                activeWireStart = null;
            }
        } else {
            startDrag(e, el);
        }
    });

    el.addEventListener('dblclick', () => {
        el.remove();
        wires = wires.filter(w => w.startEl !== el && w.endEl !== el);
        renderWires();
        updateSimulation(); // Check logic on delete
    });
    dropZone.appendChild(el);
    updateSimulation(); // Check logic on create (maybe auto power if placed on something?)
}

let dragItem = null;
let dragOffset = { x: 0, y: 0 };
function startDrag(e, el) {
    dragItem = el;
    const r = el.getBoundingClientRect();
    dragOffset = { x: e.clientX - r.left, y: e.clientY - r.top };
    el.style.zIndex = 1000;
}
document.addEventListener('mousemove', e => {
    if (dragItem) {
        const zone = dropZone.getBoundingClientRect();
        dragItem.style.left = (e.clientX - zone.left - dragOffset.x) + 'px';
        dragItem.style.top = (e.clientY - zone.top - dragOffset.y) + 'px';
        renderWires();
    }
});
document.addEventListener('mouseup', () => {
    if (dragItem) { dragItem.style.zIndex = ''; dragItem = null; }
});
