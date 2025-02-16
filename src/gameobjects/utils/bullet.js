export default class Bullet extends Phaser.GameObjects.Sprite{

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} origX Coordenada X
     * @param {number} origY Coordenada Y
     * @param {number} destX Coordenada X
     * @param {number} destY Coordenada Y
     */

    constructor(scene, origX, origY, destX, destY) {
        super(scene, origX, origY, 'bullet');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        // Initialize the direction of the bullet
        this.setSpeed(origX, origY, destX, destY);

        // Set the collision system
        this.scene.physics.add.overlap(this, this.scene.enemies, this.enemyHit, null, this);

        this.body.setCollideWorldBounds();
        
    }
    
    update(){
        
    }
    
    setSpeed(origX, origY, destX, destY){
        const speed = 300;
        let dx = destX - origX;
        let dy = destY - origY;
        let length = Math.sqrt(dx * dx + dy * dy);
        if (length !== 0) {
            dx /= length;
            dy /= length;
        }
        this.body.setVelocity(dx * speed, dy * speed);
    }
    
    enemyHit(bullet, enemy) {
        console.log('Bullet hit an enemy!');
        enemy.destroy(); // Remove the enemy
        bullet.destroy(); // Remove the bullet
    }
}
