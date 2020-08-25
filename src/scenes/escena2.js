//importar objetos aquí
import Example from '../gameObjects/Obj_example.js'

//variables aquí
var cursors;
var playerhb;
var playersprite;
var map;
var animsjson;
var mundo;
var cw;
var ch;


var animplay = false;


class escena2 extends Phaser.Scene {
    constructor() {
        super({key: "escena2"});
    }
    //create
    create (){

        cw = this.sys.game.config.width/2
        ch = this.sys.game.config.height/2
        
        const button1 = this.add.image(cw+200,ch-50,'button1').setInteractive();
        const button2 = this.add.image(cw+200,ch+50,'button2');

        button1.on('pointerup',function(){
            this.scene.restart();
            this.scene.switch("escena1");
        },this);
    
        mundo=this;
        map = this.make.tilemap({key: 'map2'});
        const tileset = map.addTilesetImage('tiles','tileset');
        

        const walls = map.createStaticLayer('walls', tileset, 100, 100);
        walls.setCollisionByExclusion(-1, true);

        playerhb = this.physics.add.sprite(cw-100,250,'playerhb').setAlpha(0.01);
        playersprite = this.add.sprite(cw,250,'lb_sprites').setFrame('player_idle');
        
        playerhb.setCollideWorldBounds(true);
        this.physics.add.collider(playerhb, walls);

        cursors = this.input.keyboard.createCursorKeys();
        animsjson = this.cache.json.get('animsjson');

        for(var i=animsjson.anims.length;i>0;i--){
            this.anims.create(animsjson.anims[i-1]);
        }
        
        
        

    }
    //update
    update (){
        //mover sprite a jugador
        playersprite.x=playerhb.x;
        playersprite.y=playerhb.y;

        if (cursors.up.isDown)
        {
            playerhb.setVelocityY(-60);
            if(animplay==false){
                animplay=true;
                playersprite.play('player_walk');
            }
        }
        else if (cursors.down.isDown)
        {
            playerhb.setVelocityY(60);
            if(animplay==false){
                animplay=true;
                playersprite.play('player_walk');
            }

        }
        else if (cursors.right.isDown)
        {
            playerhb.setVelocityX(60);
            playersprite.setFlipX(true);
            if(animplay==false){
                animplay=true;
                playersprite.play('player_walk');
            }

        }
        else if (cursors.left.isDown)
        {
            playerhb.setVelocityX(-60);
            playersprite.setFlipX(false);
            if(animplay==false){
                animplay=true;
                playersprite.play('player_walk');
            }

        }
        
        if(playerhb.body.velocity.x == 0 && playerhb.body.velocity.y==0){
            playersprite.play('player_idle')
            animplay = false;
        }
        //console.log(map.getTileAtWorldXY(player.x,player.y,true))

    }
}

export default escena2;




