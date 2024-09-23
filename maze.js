// Create a scene
const scene = new THREE.Scene();

// Set up a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Position the camera
camera.position.z = 5;

// Create a render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();


// Define the wall material and geometry
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const wallGeometry = new THREE.BoxGeometry(1, 1, 1);

// Create a grid of maze walls
for (let x = -5; x < 5; x++) {
    for (let z = -5; z < 5; z++) {
        if (Math.random() > 0.7) {  // Randomize wall placement
            const wall = new THREE.Mesh(wallGeometry, wallMaterial);
            wall.position.set(x, 0, z);
            scene.add(wall);
        }
    }
}

let controlsEnabled = false;
document.body.addEventListener('click', function() {
    document.body.requestPointerLock();
});

document.addEventListener('pointerlockchange', function() {
    controlsEnabled = !controlsEnabled;
});

// Movement keys (WASD)
const moveSpeed = 0.1;
const velocity = new THREE.Vector3();

function handleMovement() {
    if (controlsEnabled) {
        if (keys['W']) velocity.z -= moveSpeed; // Forward
        if (keys['S']) velocity.z += moveSpeed; // Backward
        if (keys['A']) velocity.x -= moveSpeed; // Left
        if (keys['D']) velocity.x += moveSpeed; // Right

        // Update the camera's position
        camera.position.add(velocity);
    }
}
let yaw = 0;
let pitch = 0;

document.addEventListener('mousemove', function(event) {
    if (controlsEnabled) {
        yaw -= event.movementX * 0.002;
        pitch -= event.movementY * 0.002;
        camera.rotation.y = yaw;
        camera.rotation.x = pitch;
    }
});


let yaw = 0;
let pitch = 0;

document.addEventListener('mousemove', function(event) {
    if (controlsEnabled) {
        yaw -= event.movementX * 0.002;
        pitch -= event.movementY * 0.002;
        camera.rotation.y = yaw;
        camera.rotation.x = pitch;
    }
});
