let phaserInstance = null;

export function init2DMap(onSelect) {
    const config = { /* phaser config */ };
    phaserInstance = new Phaser.Game(config);
}

export function destroy2DMap() {
    if (phaserInstance) {
        phaserInstance.destroy(true); // Removes canvas and clearing memory
        phaserInstance = null;
    }
}
