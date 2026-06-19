/* ===== Typing Animation ===== */

const textArray = [
    "Aspiring Embedded Systems Engineer",
    "IoT Developer",
    "AI Engineer"
];

let textIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing-text");

function typeEffect() {

    if (charIndex < textArray[textIndex].length) {

        typingElement.textContent += textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    }

    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
        textArray[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 40);

    }

    else {

        textIndex++;

        if (textIndex >= textArray.length) {

            textIndex = 0;

        }

        setTimeout(typeEffect, 400);

    }

}

typeEffect();



/* ===== Three.js 3D Sphere ===== */

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 30;



/* Sphere */

const geometry = new THREE.SphereGeometry(8, 64, 64);

const material = new THREE.MeshStandardMaterial({
    color: 0x00e5ff,
    wireframe: true
});

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);



/* Light */

const pointLight = new THREE.PointLight(0xffffff);

pointLight.position.set(20, 20, 20);

scene.add(pointLight);



/* Animation loop */

function animate() {

    requestAnimationFrame(animate);

    sphere.rotation.x += 0.002;

    sphere.rotation.y += 0.003;

    renderer.render(scene, camera);

}

animate();



/* Mouse movement effect */

document.addEventListener("mousemove", (event) => {

    let mouseX = event.clientX / window.innerWidth;

    let mouseY = event.clientY / window.innerHeight;

    sphere.rotation.y = mouseX * 2;

    sphere.rotation.x = mouseY * 2;

});



/* Resize */

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

});



/* GSAP intro animation */

gsap.from(".hero-content", {
    y: 80,
    opacity: 0,
    duration: 2
});

gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1.5
});