import Bootloader from './bootloader.js'; //crear esto y escenas
import escena1 from './scenes/escena1.js';
import escena2 from './scenes/escena2.js';
	
	const config = {
	    width: 396+200,
		height: 384,
		backgroundColor: '#3100f4',
	    parent: "contenedor",
	    physics: {
	        default: "arcade",
	        arcade: {
	            debug: false,
	            gravity: {y: 0}
	        }
	        },
	    scene: [
	        Bootloader,
			escena1,
			escena2,
	    ]
	}
	
	
	new Phaser.Game(config);