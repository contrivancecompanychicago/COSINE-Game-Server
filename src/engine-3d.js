let renderer, scene, camera;

export function init3DScene(zoneId) {
    scene = new THREE.Scene();
    // ... setup logic
}

export function destroy3DScene() {
    if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
        scene.clear();
    }
}
