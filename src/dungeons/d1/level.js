import Player from '../../gameobjects/player/player.js';
import Enemy from '../../gameobjects/enemies/enemy.js';
import Phaser from 'phaser';

export default class Level extends Phaser.Scene {

    constructor() {
        super({ key: 'level' });
    }

    create() {
        this.add.image(320, 256, 'room');
        this.player = new Player(this, 200, 300);
        this.enemies = [];
        this.enemies.push(new Enemy(this, 250, 400));

        this.physics.add.collider(this.player, this.enemies);

        this.music = this.sound.add('backgroundMusic', { loop: true, volume: 0.05 });
        this.music.play();
    }

    update(){

    }
}