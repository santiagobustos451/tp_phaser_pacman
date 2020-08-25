class Bootloader extends Phaser.Scene {
    constructor() {
        super({key: "Bootloader"});
    }
    preload() {
        this.load.on("complete", () => {
            this.scene.start("escena1");
        });
    
        //hacer acá abajo el preload
        this.load.image('player','assets/placeholder.png');
        this.load.image('tileset','assets/tileset_labyrinth.png');
        this.load.image('button1','assets/button_1.png');
        this.load.image('button2','assets/button_2.png');

        this.load.tilemapTiledJSON('map','assets/json/map.json');
        this.load.tilemapTiledJSON('map2','assets/json/map2.json');

        this.load.atlas('lb_sprites','assets/atlas/lb_sprites.png','assets/atlas/lb_sprites_atlas.json');
        this.load.json('animsjson','assets/atlas/lb_sprites_anim.json');
    }
}

export default Bootloader;