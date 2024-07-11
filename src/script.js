import * as PIXI from 'pixi.js';

let sprite;
let pixiApp;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect);
    document.getElementById('btnSubmitColor').addEventListener('click', updateColor);

    pixiApp = new PIXI.Application(800, 600, { backgroundColor: 0xd4d4d4 });
    document.body.appendChild(pixiApp.view);
});

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            showImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

function showImage(imgSrc) {
    const texture = new PIXI.Texture.from(imgSrc);

    if (sprite) {
        sprite.destroy(true);
    }

    sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.x = pixiApp.screen.width / 2;
    sprite.y = pixiApp.screen.height / 2;

    pixiApp.stage.addChild(sprite);
}

function updateColor() {
    const textInputValue = document.getElementById('textInput').value;

    if (sprite) {
        sprite.tint = parseInt(textInputValue.replace('#', ''), 16);
    }
}
