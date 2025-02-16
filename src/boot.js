import Phaser from 'phaser'

import room from '../assets/sprites/misc/room_base.png'
import angel from '../assets/sprites/enemies/angel.png'
import player from '../assets/sprites/player/player.png'
import bullet from '../assets/sprites/utils/bullet.png'
import shootSound from '../assets/audio/utils/shoot.wav'
import reloadSound from '../assets/audio/utils/reload.wav'
import backgroundMusic from '../assets/audio/music/backgroundMusic.mp3'


/**
 * Escena para la precarga de los assets que se usarán en el juego.
 * Esta escena se puede mejorar añadiendo una imagen del juego y una 
 * barra de progreso de carga de los assets
 * @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/} como ejemplo
 * sobre cómo hacer una barra de progreso.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    //this.load.setPath('assets/sprites/');
    this.load.image('angel', angel);
    this.load.image('room', room);
    this.load.image('player', player);
    this.load.image('bullet', bullet);
    this.load.audio('shootSound', shootSound);
    this.load.audio('reloadSound', reloadSound);
    this.load.audio('backgroundMusic', backgroundMusic);
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('level');
  }
}