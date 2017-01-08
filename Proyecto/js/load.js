/**
 * Created by parallels on 1/8/17.
 */

var loadState = {

    preload: function () {

        var loadingLabel = game.add.text(80,150,'loading...',{font:'30px Courier',fill:'#FFFFFF'});


        game.load.image('back1', 'assets/back1.png'); //Fondo del primer escenario
        game.load.image('ground', 'assets/ground.png'); //Suelo y plataformas
        game.load.spritesheet('marine', 'assets/marine.png', 53, 72, 49); // marine
        game.load.spritesheet('imp', 'assets/imp.png', 41, 62, 62); // imp
        game.load.image('bullet', 'assets/bala.png'); //bala
        game.load.image('ammunition', 'assets/ammunition.png'); //municion para recoger
        game.load.image('health', 'assets/health.png'); //vida para recoger
        game.load.image('gameover', 'assets/gameover.png'); //vida para recoger
        game.load.audio('bso','assets/audio/bso.mp3'); // Sonido de fondo para jugar
        game.load.audio('shot','assets/audio/shot.mp3');
        game.load.audio('reload','assets/audio/reload.mp3');
        game.load.audio('healthsound','assets/audio/health.mp3');



    },

    create: function () {
        // Llamo al menu
        game.state.start('menu');
    }


};