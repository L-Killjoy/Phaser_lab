import Phaser from 'phaser';

//This class only serves as a template. Thus, it should never be instantiated
export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds();
        this._touch_damage = false;

        // Abstract properties -> Children must override
        this._life = null;
        this._speed = null;
    }

    update() {
        if(!this._touch_damage){
            this.body.setVelocity(this.scene.player.x - this.x, this.scene.player.y - this.y);
        }
    }
}