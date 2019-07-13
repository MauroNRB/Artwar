alt = screen.height;
if (alt == 768) {
    var game = new Phaser.Game(1226, 768, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });
}
if (alt == 900 || alt >= 900) {
    var game = new Phaser.Game(1437, 900, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });
}
if (alt != 768 && alt != 900 && alt < 900) {
    var game = new Phaser.Game(1005, 630, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });
}

// Players

var player1;
var player2;

// Pistola

var pistP1 = false;
var pistP2 = false;

//Missil

var armaP1 = false;
var armaP2 = false;

//Tiro

var tiro1 = false;
var tiro2 = false;
var anim = true;

//Direção dos Players

var D1;
var E1;
var E2;
var D2;

//Direção dos Players Armas

var D1P;
var E1P;
var D2P;
var E2P;

//Morte

var deadP2 = false;
var deadP1 = false;

//Musica

var music;

//Bala de Pistola

var balaDA1;
var balaEA1;
var balaDA2;
var balaEA2;

//Bala do Missil

var miDA1;
var miEA1;
var miDA2;
var miEA2;

//Ver se já Passou Pela Tela

var AtiP1D = false;
var AtiP1E = false;
var AtiP2D = false;
var AtiP2E = false;

//Nº de Vida do Player 1

var vidaP1 = 0;
var vida1;
var vida2;
var vida3;
var vida4;
var vida5;

//Nº de Vida do Player 2

var vidaP2 = 0;
var vida1_2;
var vida2_2;
var vida3_2;
var vida4_2;
var vida5_2;

//win

var winP1;
var winP2;
var perdeu;

//Timer

var timer;
var total = 0;
var txtTime;

var pontos;

var pontuacao = 300;

//Music

var music;
var reniciou = false;

//Pausa

var p;

//já salvou a pontuação
var salvou = false;

function preload() {

    //Carregar
    if (alt == 768) {
        game.load.image('BG', 'img/BG/768.png');
        game.load.spritesheet('soldado1', 'img/soldadoP1/768.png', 115.88, 101);
        game.load.spritesheet('soldado2', 'img/soldadoP2/768.png', 113.76, 107);
        game.load.image('chao0', 'img/plat0/768.png');
        game.load.image('chao1', 'img/plat1/768.png');
        game.load.image('chao2', 'img/plat2/768.png');
        game.load.image('chao3', 'img/plat3/768.png');
        game.load.image('chao4', 'img/plat4/768.png');
        game.load.image('chao5', 'img/plat5/768.png');
        game.load.image('balaD', 'img/balaD/768.png');
        game.load.image('balaE', 'img/balaE/768.png');
        game.load.image('missilD', 'img/missilD/768.png');
        game.load.image('missilE', 'img/missilE/768.png');
        game.load.image('vida', 'img/coracao1/768.png');
        game.load.image('win1', 'img/win1/768.png');
        game.load.image('win2', 'img/win2/768.png');
        game.load.image('perdeu', 'img/perdeu/768.png');
    }
    if (alt == 900 || alt >= 900) {
        game.load.image('BG', 'img/BG/900.png');
        game.load.spritesheet('soldado1', 'img/soldadoP1/900.png', 135.3, 118);
        game.load.spritesheet('soldado2', 'img/soldadoP2/900.png', 134, 126);
        game.load.image('chao0', 'img/plat0/900.png');
        game.load.image('chao1', 'img/plat1/900.png');
        game.load.image('chao2', 'img/plat2/900.png');
        game.load.image('chao3', 'img/plat3/900.png');
        game.load.image('chao4', 'img/plat4/900.png');
        game.load.image('chao5', 'img/plat5/900.png');
        game.load.image('balaD', 'img/balaD/900.png');
        game.load.image('balaE', 'img/balaE/900.png');
        game.load.image('missilD', 'img/missilD/900.png');
        game.load.image('missilE', 'img/missilE/900.png');
        game.load.image('vida', 'img/coracao1/900.png');
        game.load.image('win1', 'img/win1/900.png');
        game.load.image('win2', 'img/win2/900.png');
        game.load.image('perdeu', 'img/perdeu/900.png');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        game.load.spritesheet('soldado1', 'img/soldadoP1/soldadoP1.png', 95.25, 83);
        game.load.spritesheet('soldado2', 'img/soldadoP2/soldadoP2.png', 93.6, 88);
        game.load.image('BG', 'img/BG/BG.png');
        game.load.image('chao0', 'img/plat0/plat0.png');
        game.load.image('chao1', 'img/plat1/plat1.png');
        game.load.image('chao2', 'img/plat2/plat2.png');
        game.load.image('chao3', 'img/plat3/plat3.png');
        game.load.image('chao4', 'img/plat4/plat4.png');
        game.load.image('chao5', 'img/plat5/plat5.png');
        game.load.image('balaD', 'img/balaD/balaD.png');
        game.load.image('balaE', 'img/balaE/balaE.png');
        game.load.image('missilD', 'img/missilD/missilD.png');
        game.load.image('missilE', 'img/missilE/missilE.png');
        game.load.image('vida', 'img/coracao1/coracao1.png');
        game.load.image('win1', 'img/win1/win1.png');
        game.load.image('win2', 'img/win2/win2.png');
        game.load.image('perdeu', 'img/perdeu/perdeu.png');
    }
    if (!reniciou) {
        game.load.audio('boden', ['snd/music.mp3', 'snd/music.ogg']);
    }
}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'BG');

    //Plataformas
    platforms = game.add.group();
    platforms.enableBody = true;

    if (alt == 768) {
        var chao0 = platforms.create(720, 207, 'chao0');
        var chao0_0 = platforms.create(500, 366, 'chao0');
        var chao1 = platforms.create(866, 659, 'chao1');
        var chao1_1 = platforms.create(1000, 659, 'chao1');
        var chao2 = platforms.create(0, 665, 'chao2');
        var chao2_2 = platforms.create(223, 665, 'chao2');
        var chao2_2_2 = platforms.create(446, 665, 'chao2');
        var chao2_2_2_2 = platforms.create(669, 665, 'chao2');
        var chao3 = platforms.create(1041, 167, 'chao3');
        var chao4 = platforms.create(518, 623, 'chao4');
        var chao4_4 = platforms.create(518, 586, 'chao4');
        var chao5 = platforms.create(0, 186, 'chao1');
    }
    if (alt == 900 || alt >= 900) {
        var chao0 = platforms.create(844, 243, 'chao0');
        var chao0_0 = platforms.create(586, 429, 'chao0');
        var chao1 = platforms.create(1015, 772, 'chao1');
        var chao1_1 = platforms.create(1215, 772, 'chao1');
        var chao2 = platforms.create(0, 779, 'chao2');
        var chao2_2 = platforms.create(261, 779, 'chao2');
        var chao2_2_2 = platforms.create(522, 779, 'chao2');
        var chao2_2_2_2 = platforms.create(783, 779, 'chao2');
        var chao3 = platforms.create(1220, 196, 'chao3');
        var chao4 = platforms.create(607, 730, 'chao4');
        var chao4_4 = platforms.create(607, 687, 'chao4');
        var chao5 = platforms.create(0, 218, 'chao1');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        var chao0 = platforms.create(590, 170, 'chao0');
        var chao0_0 = platforms.create(410, 300, 'chao0');
        var chao1 = platforms.create(730, 540, 'chao1');
        var chao1_1 = platforms.create(910, 540, 'chao1');
        var chao2 = platforms.create(0, 545, 'chao2');
        var chao2_2 = platforms.create(183, 545, 'chao2');
        var chao2_2_2 = platforms.create(366, 545, 'chao2');
        var chao2_2_2_2 = platforms.create(549, 545, 'chao2');
        var chao3 = platforms.create(860, 138, 'chao3');
        var chao4 = platforms.create(425, 510, 'chao4');
        var chao4_4 = platforms.create(425, 480, 'chao4');
        var chao5 = platforms.create(0, 152, 'chao1');
    }
    chao0.body.immovable = true;
    chao0_0.body.immovable = true;
    chao1.body.immovable = true;
    chao1_1.body.immovable = true;
    chao2.body.immovable = true;
    chao2_2.body.immovable = true;
    chao2_2_2.body.immovable = true;
    chao2_2_2_2.body.immovable = true;
    chao3.body.immovable = true;
    chao4.body.immovable = true;
    chao4_4.body.immovable = true;
    chao5.body.immovable = true;
    cursors = game.input.keyboard.createCursorKeys();

    //Vida Player 1

    if (alt == 768) {
        vida1 = game.add.sprite(0, 0, 'vida');
        vida2 = game.add.sprite(30, 0, 'vida');
        vida3 = game.add.sprite(60, 0, 'vida');
        vida4 = game.add.sprite(90, 0, 'vida');
        vida5 = game.add.sprite(120, 0, 'vida');
        vida6 = game.add.sprite(150, 0, 'vida');
    }
    if (alt == 900 || alt >= 900) {
        vida1 = game.add.sprite(0, 0, 'vida');
        vida2 = game.add.sprite(36, 0, 'vida');
        vida3 = game.add.sprite(72, 0, 'vida');
        vida4 = game.add.sprite(108, 0, 'vida');
        vida5 = game.add.sprite(144, 0, 'vida');
        vida6 = game.add.sprite(180, 0, 'vida');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        vida1 = game.add.sprite(0, 0, 'vida');
        vida2 = game.add.sprite(30, 0, 'vida');
        vida3 = game.add.sprite(60, 0, 'vida');
        vida4 = game.add.sprite(90, 0, 'vida');
        vida5 = game.add.sprite(120, 0, 'vida');
        vida6 = game.add.sprite(150, 0, 'vida');
    }
    vida1.visible = true;
    vida2.visible = true;
    vida3.visible = true;
    vida4.visible = true;
    vida5.visible = true;
    vida6.visible = true;

    //Vida Player 2
    if (alt == 768) {
        vida1_2 = game.add.sprite(1196, 0, 'vida');
        vida2_2 = game.add.sprite(1166, 0, 'vida');
        vida3_2 = game.add.sprite(1136, 0, 'vida');
        vida4_2 = game.add.sprite(1106, 0, 'vida');
        vida5_2 = game.add.sprite(1076, 0, 'vida');
        vida6_2 = game.add.sprite(1046, 0, 'vida');
    }
    if (alt == 900 || alt >= 900) {
        vida1_2 = game.add.sprite(1401, 0, 'vida');
        vida2_2 = game.add.sprite(1365, 0, 'vida');
        vida3_2 = game.add.sprite(1329, 0, 'vida');
        vida4_2 = game.add.sprite(1293, 0, 'vida');
        vida5_2 = game.add.sprite(1257, 0, 'vida');
        vida6_2 = game.add.sprite(1221, 0, 'vida');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        vida1_2 = game.add.sprite(975, 0, 'vida');
        vida2_2 = game.add.sprite(945, 0, 'vida');
        vida3_2 = game.add.sprite(915, 0, 'vida');
        vida4_2 = game.add.sprite(885, 0, 'vida');
        vida5_2 = game.add.sprite(855, 0, 'vida');
        vida6_2 = game.add.sprite(825, 0, 'vida');
    }
    vida1_2.visible = true;
    vida2_2.visible = true;
    vida3_2.visible = true;
    vida4_2.visible = true;
    vida5_2.visible = true;
    vida6_2.visible = true;

    //Player 1
    if (alt == 768) {
        player1 = game.add.sprite(0, 83, 'soldado1');
    }
    if (alt == 900 || alt >= 900) {
        player1 = game.add.sprite(0, 97, 'soldado1');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        player1 = game.add.sprite(0, 68, 'soldado1');
    }
    player1.animations.add('andandoD', [2, 3, 4], 6, true);
    player1.animations.add('andandoE', [0, 1, 10], 5, true);
    player1.animations.add('pistDP1', [7], 5, true);
    player1.animations.add('pistEP1', [6], 5, true);
    player1.animations.add('armaDP1', [9], 5, true);
    player1.animations.add('armaEP1', [8], 5, true);
    player1.animations.add('mortoP1', [11], 5, true);
    player1.animations.add('parado1D', [2], 5, true);
    player1.animations.add('parado1E', [10], 5, true);


    //Player 2

    if (alt == 768) {
        player2 = game.add.sprite(976, 551, 'soldado2');
    }
    if (alt == 900 || alt >= 900) {
        player2 = game.add.sprite(1144, 646, 'soldado2');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        player2 = game.add.sprite(800, 452, 'soldado2');
    }
    player2.animations.add('andandoD2', [0, 1], 6, true);
    player2.animations.add('andandoE2', [4, 5, 6], 5, true);
    player2.animations.add('pistDP2', [7], 5, true);
    player2.animations.add('pistEP2', [8], 5, true);
    player2.animations.add('armaDP2', [9], 5, true);
    player2.animations.add('armaEP2', [10], 5, true);
    player2.animations.add('mortoP2', [11], 1, true);
    player2.animations.add('parado2D', [12], 5, true);
    player2.animations.add('parado2E', [2], 5, true);


    //Balas

    if (alt == 768) {
        balaDA1 = game.add.sprite(1201.602, 759.46, 'balaD');
        balaEA1 = game.add.sprite(0, 759.46, 'balaE');
    }
    if (alt == 900 || alt >= 900) {
        balaDA1 = game.add.sprite(1408.4029, 889.99, 'balaD');
        balaEA1 = game.add.sprite(0, 889.99, 'balaE');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        balaDA1 = game.add.sprite(985, 623, 'balaD');
        balaEA1 = game.add.sprite(0, 623, 'balaE');
    }
    balaDA1.visible = false;
    balaEA1.visible = false;
    if (alt == 768) {
        balaEA2 = game.add.sprite(0, 759.46, 'balaE');
        balaDA2 = game.add.sprite(1201.602, 759.46, 'balaD');
    }
    if (alt == 900 || alt >= 900) {
        balaEA2 = game.add.sprite(0, 889.99, 'balaE');
        balaDA2 = game.add.sprite(1408.4029, 889.99, 'balaD');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        balaEA2 = game.add.sprite(0, 623, 'balaE');
        balaDA2 = game.add.sprite(985, 623, 'balaD');
    }
    balaEA2.visible = false;
    balaDA2.visible = false;
    if (alt == 768) {
        miDA1 = game.add.sprite(1201.602, 759.46, 'missilD');
        miEA1 = game.add.sprite(0, 759.46, 'missilE');
    }
    if (alt == 900 || alt >= 900) {
        miDA1 = game.add.sprite(1408.4029, 889.99, 'missilD');
        miEA1 = game.add.sprite(0, 889.99, 'missilE');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        miDA1 = game.add.sprite(985, 623, 'missilD');
        miEA1 = game.add.sprite(0, 623, 'missilE');
    }
    miDA1.visible = false;
    miEA1.visible = false;
    if (alt == 768) {
        miEA2 = game.add.sprite(0, 759.46, 'missilE');
        miDA2 = game.add.sprite(1201.602, 759.46, 'missilD');
    }
    if (alt == 900 || alt >= 900) {
        miEA2 = game.add.sprite(0, 889.99, 'missilE');
        miDA2 = game.add.sprite(1408.4029, 889.99, 'missilD');
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        miEA2 = game.add.sprite(0, 623, 'missilE');
        miDA2 = game.add.sprite(985, 623, 'missilD');
    }
    miEA2.visible = false;
    miDA2.visible = false;

    //Musica

    if (!reniciou) {
        music = game.add.audio('boden');
        music.loopFull();
    }

    //Win

    winP1 = game.add.sprite(220, 110, 'win1');
    winP2 = game.add.sprite(220, 110, 'win2');
    perdeu = game.add.sprite(220, 110, 'perdeu');
    winP1.visible = false;
    winP2.visible = false;
    perdeu.visible = false;

    //Tempo

    timer = game.time.create(false);
    timer.loop(1000, updateCounter, this);
    timer.start();

    pontos = game.time.create(false);
    pontos.loop(1000, updatePontuacao, this);
    pontos.start();

    //Pausa

    p = this.input.keyboard.addKey(Phaser.Keyboard.P);
    p.onDown.add(togglePause, this);

}

var pausa;

function togglePause() {

    pausa = game.physics.arcade.isPaused = (game.physics.arcade.isPaused) ? false : true;

}

function update() {

    //Gravidade

    game.physics.arcade.enable(player1);
    player1.body.collideWorldBounds = true;
    game.physics.arcade.enable(player2);
    player2.body.collideWorldBounds = true;
    var hitPlatform1 = game.physics.arcade.collide(player1, platforms);
    player1.body.velocity.x = 0;
    player2.body.velocity.x = 0;
    if (alt == 768) {
        player1.body.bounce.y = 0.2438;
        player1.body.gravity.y = 371.809;
        player2.body.bounce.y = 0.2438;
        player2.body.gravity.y = 371.809;
    }
    if (alt == 900 || alt >= 900) {
        player1.body.bounce.y = 0.2857;
        player1.body.gravity.y = 435.71367;
        player2.body.bounce.y = 0.2857;
        player2.body.gravity.y = 435.71367;
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        player1.body.velocity.x = 0;
        player1.body.bounce.y = 0.2;
        player1.body.gravity.y = 305;
        player2.body.bounce.y = 0.2;
        player2.body.gravity.y = 305;
    }
    var hitPlatform2 = game.physics.arcade.collide(player2, platforms);

    //Tiro de Missil

    game.physics.arcade.enable(miDA1);
    game.physics.arcade.enable(miDA2);
    game.physics.arcade.enable(miEA1);
    game.physics.arcade.enable(miEA2);
    miDA1.body.collideWorldBounds = false;
    miDA2.body.collideWorldBounds = false;
    miEA1.body.collideWorldBounds = false;
    miEA2.body.collideWorldBounds = false;
    var hitMiD1 = game.physics.arcade.collide(miDA1, platforms);
    var hitMiD2 = game.physics.arcade.collide(miDA2, platforms);
    var hitMiE1 = game.physics.arcade.collide(miEA1, platforms);
    var hitMiE2 = game.physics.arcade.collide(miEA2, platforms);

    //Tiro de Pistola

    game.physics.arcade.enable(balaDA1);
    game.physics.arcade.enable(balaDA2);
    game.physics.arcade.enable(balaEA1);
    game.physics.arcade.enable(balaEA2);
    balaDA1.body.collideWorldBounds = false;
    balaDA2.body.collideWorldBounds = false;
    balaEA1.body.collideWorldBounds = false;
    balaEA2.body.collideWorldBounds = false;
    var hitBalaD1 = game.physics.arcade.collide(balaDA1, platforms);
    var hitBalaD2 = game.physics.arcade.collide(balaDA2, platforms);
    var hitBalaE1 = game.physics.arcade.collide(balaEA1, platforms);
    var hitBalaE2 = game.physics.arcade.collide(balaEA2, platforms);

    player1.body.checkCollision.up = false;
    player2.body.checkCollision.up = false;

    //Sistema de Andar Player 2

    if (cursors.left.isDown) {
        E2 = true;
        E2P = true;
        D2P = false;
    }
    if (!cursors.left.isDown) {
        E2 = false;
    }
    if (cursors.right.isDown) {
        D2 = true;
        D2P = true;
        E2P = false;
    }
    if (!cursors.right.isDown) {
        D2 = false;
    }
    if (!D2 && !E2 && player2.x > player1.x) {
        player2.animations.play('parado2E');
    }
    if (!D2 && !E2 && player2.x < player1.x) {
        player2.animations.play('parado2D');
    }
    if (alt == 768) {
        if (E2 && !pistP2 && !deadP2 && !armaP2 && !deadP1 && !pausa) {
            player2.body.velocity.x = -182.985;
            player2.animations.play('andandoE2');
        }
        if (D2 && !pistP2 && !deadP2 && !armaP2 && !deadP1 && !pausa) {
            player2.body.velocity.x = 182.985;
            player2.animations.play('andandoD2');
        }
        if (cursors.up.isDown && player2.body.touching.down && hitPlatform2 && !deadP2 && !deadP1) {
            player2.body.velocity.y = -426.66;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (E2 && !pistP2 && !deadP2 && !armaP2 && !deadP1 && !pausa) {
            player2.body.velocity.x = -214.4775;
            player2.animations.play('andandoE2');
        }
        if (D2 && !pistP2 && !deadP2 && !armaP2 && !deadP1 && !pausa) {
            player2.body.velocity.x = 214.4775;
            player2.animations.play('andandoD2');
        }
        if (cursors.up.isDown && player2.body.touching.down && hitPlatform2 && !deadP2 && !deadP1) {
            player2.body.velocity.y = -499.992;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (E2 && !pistP2 && !deadP2 && !armaP2 && !deadP1 && !pausa) {
            player2.body.velocity.x = -150;
            player2.animations.play('andandoE2');
        }
        if (D2 && !pistP2 && !deadP2 && !armaP2 && !deadP1 && !pausa) {
            player2.body.velocity.x = 150;
            player2.animations.play('andandoD2');
        }
        if (cursors.up.isDown && player2.body.touching.down && hitPlatform2 && !deadP2 && !deadP1) {
            player2.body.velocity.y = -350;
        }
    }

    //Sistema de Andar Player 1

    if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        D1 = true;
        D1P = true;
        E1P = false;
    }
    if (!game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        D1 = false;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        E1 = true;
        E1P = true;
        D1P = false;
    }
    if (!game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        E1 = false;
    }
    if (!D1 && !E1 && player1.x > player2.x) {
        player1.animations.play('parado1E');
    }
    if (!D1 && !E1 && player1.x < player2.x) {
        player1.animations.play('parado1D');
    }
    if (alt == 768) {
        if (D1 && !pistP1 && !deadP1 && !armaP1 && !deadP2 && !pausa) {
            player1.body.velocity.x = 182.985;
            player1.animations.play('andandoD');
        }
        if (E1 && !pistP1 && !deadP1 && !armaP1 && !deadP2 && !pausa) {
            player1.body.velocity.x = -182.985;
            player1.animations.play('andandoE');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.W) && player1.body.touching.down && hitPlatform1 && !deadP1 && !deadP2) {
            player1.body.velocity.y = -426.66;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (D1 && !pistP1 && !deadP1 && !armaP1 && !deadP2 && !pausa) {
            player1.body.velocity.x = 214.4775;
            player1.body.velocity.x = 214.4775;
            player1.animations.play('andandoD');
        }
        if (E1 && !pistP1 && !deadP1 && !armaP1 && !deadP2 && !pausa) {
            player1.body.velocity.x = -214.477;
            player1.animations.play('andandoE');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.W) && player1.body.touching.down && hitPlatform1 && !deadP1 && !deadP2) {
            player1.body.velocity.y = -499.992;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (D1 && !pistP1 && !deadP1 && !armaP1 && !deadP2 && !pausa) {
            player1.body.velocity.x = 150;
            player1.animations.play('andandoD');
        }
        if (E1 && !pistP1 && !deadP1 && !armaP1 && !deadP2 && !pausa) {
            player1.body.velocity.x = -150;
            player1.animations.play('andandoE');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.W) && player1.body.touching.down && hitPlatform1 && !deadP1 && !deadP2) {
            player1.body.velocity.y = -350;
        }
    }
    //Sistema de Morte do Player 1

    if (alt == 768) {
        if (((player1.x + 48.796) >= balaDA2.x && player1.x <= balaDA2.x) && ((player1.y + 60.952) >= balaDA2.y && player1.y <= balaDA2.y)) {
            vidaP1 += 1;
        }
        if (((player1.x + 48.796) >= balaEA2.x && player1.x <= balaEA2.x) && ((player1.y + 60.952) >= balaEA2.y && player1.y <= balaEA2.y)) {
            vidaP1 += 1;
        }
        if (((player1.x + 24.398) >= miDA2.x && player1.x <= miDA2.x) && ((player1.y + 60.952) >= miDA2.y && player1.y <= miDA2.y)) {
            vidaP1 += 2;
        }
        if (((player1.x + 24.398) >= miEA2.x && player1.x <= miEA2.x) && ((player1.y + 60.952) >= miEA2.y && player1.y <= miEA2.y)) {
            vidaP1 += 2;
        }
        if (player1.y >= 610) {
            vida6.visible = false;
            vida5.visible = false;
            vida5.visible = false;
            vida4.visible = false;
            vida3.visible = false;
            vida2.visible = false;
            vida1.visible = false;
            deadP1 = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (((player1.x + 57.194) >= balaDA2.x && player1.x <= balaDA2.x) && ((player1.y + 71.428) >= balaDA2.y && player1.y <= balaDA2.y)) {
            vidaP1 += 1;
        }
        if (((player1.x + 57.194) >= balaEA2.x && player1.x <= balaEA2.x) && ((player1.y + 71.428) >= balaEA2.y && player1.y <= balaEA2.y)) {
            vidaP1 += 1;
        }
        if (((player1.x + 28.591) >= miDA2.x && player1.x <= miDA2.x) && ((player1.y + 71.428) >= miDA2.y && player1.y <= miDA2.y)) {
            vidaP1 += 2;
        }
        if (((player1.x + 28.591) >= miEA2.x && player1.x <= miEA2.x) && ((player1.y + 71.428) >= miEA2.y && player1.y <= miEA2.y)) {
            vidaP1 += 2;
        }
        if (player1.y >= 715) {
            vida6.visible = false;
            vida5.visible = false;
            vida5.visible = false;
            vida4.visible = false;
            vida3.visible = false;
            vida2.visible = false;
            vida1.visible = false;
            deadP1 = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (((player1.x + 40) >= balaDA2.x && player1.x <= balaDA2.x) && ((player1.y + 50) >= balaDA2.y && player1.y <= balaDA2.y)) {
            vidaP1 += 1;
        }
        if (((player1.x + 40) >= balaEA2.x && player1.x <= balaEA2.x) && ((player1.y + 50) >= balaEA2.y && player1.y <= balaEA2.y)) {
            vidaP1 += 1;
        }
        if (((player1.x + 20) >= miDA2.x && player1.x <= miDA2.x) && ((player1.y + 50) >= miDA2.y && player1.y <= miDA2.y)) {
            vidaP1 += 2;
        }
        if (((player1.x + 20) >= miEA2.x && player1.x <= miEA2.x) && ((player1.y + 50) >= miEA2.y && player1.y <= miEA2.y)) {
            vidaP1 += 2;
        }
        if (player1.y >= 500) {
            vida6.visible = false;
            vida5.visible = false;
            vida5.visible = false;
            vida4.visible = false;
            vida3.visible = false;
            vida2.visible = false;
            vida1.visible = false;
            deadP1 = true;
        }
    }
    if (vidaP1 == 1) {
        vida6.visible = false;
    }
    if (vidaP1 >= 2) {
        vida6.visible = false
        vida5.visible = false;
    }
    if (vidaP1 >= 3) {
        vida6.visible = false
        vida5.visible = false;
        vida4.visible = false;
    }
    if (vidaP1 >= 4) {
        vida6.visible = false
        vida5.visible = false;
        vida4.visible = false;
        vida3.visible = false;
    }
    if (vidaP1 >= 5) {
        vida6.visible = false
        vida5.visible = false;
        vida4.visible = false;
        vida3.visible = false;
        vida2.visible = false;
    }
    if (vidaP1 >= 6) {
        vida6.visible = false
        vida5.visible = false;
        vida4.visible = false;
        vida3.visible = false;
        vida2.visible = false;
        vida1.visible = false;
        deadP1 = true;
    }
    if (deadP1) {
        player1.animations.play('mortoP1');
        winP2.visible = true;
    }

    //Sistema de Morte do Player 2

    if (alt == 768) {
        if (((player2.x + 48.796) >= balaDA1.x && player2.x <= balaDA1.x) && ((player2.y + 60.952) >= balaDA1.y && player2.y <= balaDA1.y)) {
            vidaP2 += 1;
        }
        if (((player2.x + 48.796) >= balaEA1.x && player2.x <= balaEA1.x) && ((player2.y + 60.952) >= balaEA1.y && player2.y <= balaEA1.y)) {
            vidaP2 += 1;
        }
        if (((player2.x + 24.398) >= miDA1.x && player2.x <= miDA1.x) && ((player2.y + 60.952) >= miDA1.y && player2.y <= miDA1.y)) {
            vidaP2 += 2;
        }
        if (((player2.x + 24.398) >= miEA1.x && player2.x <= miEA1.x) && ((player2.y + 60.952) >= miEA1.y && player2.y <= miEA1.y)) {
            vidaP2 += 2;
        }
        if (player2.y >= 610) {
            vida6_2.visible = false;
            vida5_2.visible = false;
            vida4_2.visible = false;
            vida3_2.visible = false;
            vida2_2.visible = false;
            vida1_2.visible = false;
            deadP2 = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (((player2.x + 57.194) >= balaDA1.x && player2.x <= balaDA1.x) && ((player2.y + 71.428) >= balaDA1.y && player2.y <= balaDA1.y)) {
            vidaP2 += 1;
        }
        if (((player2.x + 57.194) >= balaEA1.x && player2.x <= balaEA1.x) && ((player2.y + 71.428) >= balaEA1.y && player2.y <= balaEA1.y)) {
            vidaP2 += 1;
        }
        if (((player2.x + 28.597) >= miDA1.x && player2.x <= miDA1.x) && ((player2.y + 71.428) >= miDA1.y && player2.y <= miDA1.y)) {
            vidaP2 += 2;
        }
        if (((player2.x + 28.597) >= miEA1.x && player2.x <= miEA1.x) && ((player2.y + 71.428) >= miEA1.y && player2.y <= miEA1.y)) {
            vidaP2 += 2;
        }
        if (player2.y >= 714.84) {
            vida6_2.visible = false;
            vida5_2.visible = false;
            vida4_2.visible = false;
            vida3_2.visible = false;
            vida2_2.visible = false;
            vida1_2.visible = false;
            deadP2 = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (((player2.x + 40) >= balaDA1.x && player2.x <= balaDA1.x) && ((player2.y + 50) >= balaDA1.y && player2.y <= balaDA1.y)) {
            vidaP2 += 1;
        }
        if (((player2.x + 40) >= balaEA1.x && player2.x <= balaEA1.x) && ((player2.y + 50) >= balaEA1.y && player2.y <= balaEA1.y)) {
            vidaP2 += 1;
        }
        if (((player2.x + 20) >= miDA1.x && player2.x <= miDA1.x) && ((player2.y + 50) >= miDA1.y && player2.y <= miDA1.y)) {
            vidaP2 += 2;
        }
        if (((player2.x + 20) >= miEA1.x && player2.x <= miEA1.x) && ((player2.y + 50) >= miEA1.y && player2.y <= miEA1.y)) {
            vidaP2 += 2;
        }
        if (player2.y >= 500) {
            vida6_2.visible = false;
            vida5_2.visible = false;
            vida4_2.visible = false;
            vida3_2.visible = false;
            vida2_2.visible = false;
            vida1_2.visible = false;
            deadP2 = true;
        }
    }
    if (vidaP2 == 1) {
        vida6_2.visible = false;
    }
    if (vidaP2 >= 2) {
        vida6_2.visible = false;
        vida5_2.visible = false;
    }
    if (vidaP2 >= 3) {
        vida6_2.visible = false;
        vida5_2.visible = false;
        vida4_2.visible = false;
    }
    if (vidaP2 >= 4) {
        vida6_2.visible = false;
        vida5_2.visible = false;
        vida4_2.visible = false;
        vida3_2.visible = false;
    }
    if (vidaP2 >= 5) {
        vida6_2.visible = false;
        vida5_2.visible = false;
        vida4_2.visible = false;
        vida3_2.visible = false;
        vida2_2.visible = false;
    }
    if (vidaP2 >= 6) {
        vida6_2.visible = false;
        vida5_2.visible = false;
        vida4_2.visible = false;
        vida3_2.visible = false;
        vida2_2.visible = false;
        vida1_2.visible = false;
        deadP2 = true;
    }
    if (deadP2) {
        player2.animations.play('mortoP2');
        winP1.visible = true;
    }

    if (deadP1 && deadP2) {
        winP1.visible = false;
        winP2.visible = false;
        perdeu.visible = true;
    }
    //Sistema de Arma e Tiro do Player 1

    if (game.input.keyboard.isDown(Phaser.Keyboard.ONE) && !deadP1 && !deadP2 && !pausa) {
        pistP1 = true;
        armaP1 = false;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.TWO) && !deadP1 && !deadP2 && !pausa) {
        armaP1 = true;
        pistP1 = false;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.E) && !deadP1 && !deadP2 && !pausa) {
        tiro1 = true;
    }
    if (!game.input.keyboard.isDown(Phaser.Keyboard.E)) {
        tiro1 = false;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
        pistP1 = false;
        armaP1 = false;
    }

    //Sistema de Arma e Tiro do Player 2

    if (game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_1) && !deadP2 && !deadP1 && !pausa) {
        pistP2 = true;
        armaP2 = false;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_2) && !deadP2 && !deadP1 && !pausa) {
        armaP2 = true;
        pistP2 = false;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_4)) {
        pistP2 = false;
        armaP2 = false;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_0) && !deadP2 && !deadP1 && !pausa) {
        tiro2 = true;
    }
    if (!game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_0)) {
        tiro2 = false;
    }

    //Tiro Player 1 Direita

    if (pistP1 && D1P && !deadP1 && !deadP2 && !pausa) {
        player1.animations.play('pistDP1');
    }
    if (pistP1 && D1P && tiro1 && !AtiP1D) {
        balaDA1.visible = true;
    }
    if (alt == 768) {
        if (pistP1 && D1P && tiro1 && AtiP1D) {
            balaDA1.visible = true;
            balaDA1.x = player1.x + 30.4975;
        }
        if (balaDA1.visible) {
            balaDA1.x = balaDA1.x + 48.796;
            balaDA1.y = player1.y + 42.6965;
        }
        if (balaDA1.x > 1640.766) {
            balaDA1.visible = false;
            AtiP1D = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (pistP1 && D1P && tiro1 && AtiP1D) {
            balaDA1.visible = true;
            balaDA1.x = player1.x + 35.746;
        }
        if (balaDA1.visible) {
            balaDA1.x = balaDA1.x + 57.194;
            balaDA1.y = player1.y + 50.0349;
        }
        if (balaDA1.x > 1923.149) {
            balaDA1.visible = false;
            AtiP1D = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (pistP1 && D1P && tiro1 && AtiP1D) {
            balaDA1.visible = true;
            balaDA1.x = player1.x + 25;
        }
        if (balaDA1.visible) {
            balaDA1.x = balaDA1.x + 40;
            balaDA1.y = player1.y + 35;
        }
        if (balaDA1.x > 1345) {
            balaDA1.visible = false;
            AtiP1D = true;
        }
    }
    if (balaDA1.visible && hitBalaD1 && !tiro1) {
        balaDA1.visible = false;
    }

    //Tiro Player 1 Esquerda

    if (pistP1 && E1P && !deadP1 && !deadP2 && !pausa) {
        player1.animations.play('pistEP1');
    }
    if (pistP1 && E1P && tiro1 && !AtiP1E) {
        balaEA1.visible = true;
    }
    if (alt == 768) {
        if (pistP1 && E1P && tiro1 && AtiP1E) {
            balaEA1.visible = true;
            balaEA1.x = player1.x + 67.0945;
        }
        if (balaEA1.visible) {
            balaEA1.x = balaEA1.x - 48.796;
            balaEA1.y = player1.y + 39.009;
        }
        if (balaEA1.x < 3.65) {
            balaEA1.visible = false;
            AtiP1E = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (pistP1 && E1P && tiro1 && AtiP1E) {
            balaEA1.visible = true;
            balaEA1.x = player1.x + 78.6417;
        }
        if (balaEA1.visible) {
            balaEA1.x = balaEA1.x - 57.194;
            balaEA1.y = player1.y + 45.71367;
        }
        if (balaEA1.x < 4.27818) {
            balaEA1.visible = false;
            AtiP1E = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (pistP1 && E1P && tiro1 && AtiP1E) {
            balaEA1.visible = true;
            balaEA1.x = player1.x + 55;
        }
        if (balaEA1.visible) {
            balaEA1.x = balaEA1.x - 40;
            balaEA1.y = player1.y + 32;
        }
        if (balaEA1.x < 3) {
            balaEA1.visible = false;
            AtiP1E = true;
        }
    }
    if (balaEA1.visible && hitBalaE1 && !tiro1) {
        balaEA1.visible = false;
    }

    //Tiro Player 2 Direita

    if (pistP2 && D2P && !deadP2 && !deadP1 && !pausa) {
        player2.animations.play('pistDP2');
    }
    if (pistP2 && D2P && tiro2 && !AtiP2D) {
        balaDA2.visible = true;
    }
    if (alt == 768) {
        if (pistP2 && D2P && tiro2 && AtiP2D) {
            balaDA2.visible = true;
            balaDA2.x = player2.x + 30.4975;
        }
        if (balaDA2.visible) {
            balaDA2.x = balaDA2.x + 48.796;
            balaDA2.y = player2.y + 42.6965;
        }
        if (balaDA2.x > 1707.86) {
            balaDA2.visible = false;
            AtiP2D = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (pistP2 && D2P && tiro2 && AtiP2D) {
            balaDA2.visible = true;
            balaDA2.x = player2.x + 35.746;
        }
        if (balaDA2.visible) {
            balaDA2.x = balaDA2.x + 57.194;
            balaDA2.y = player2.y + 50.03496;
        }
        if (balaDA2.x > 2001.79) {
            balaDA2.visible = false;
            AtiP2D = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (pistP2 && D2P && tiro2 && AtiP2D) {
            balaDA2.visible = true;
            balaDA2.x = player2.x + 25;
        }
        if (balaDA2.visible) {
            balaDA2.x = balaDA2.x + 40;
            balaDA2.y = player2.y + 35;
        }
        if (balaDA2.x > 1400) {
            balaDA2.visible = false;
            AtiP2D = true;
        }
    }
    if (balaDA2.visible && hitBalaD2 && !tiro2) {
        balaDA2.visible = false;
    }

    //Tiro Player 2 Esquerdo

    if (pistP2 && E2P && !deadP2 && !deadP1 && !pausa) {
        player2.animations.play('pistEP2');
    }
    if (pistP2 && E2P && tiro2 && !AtiP2E) {
        balaEA2.visible = true;
    }
    if (alt == 768) {
        if (pistP2 && E2P && tiro2 && AtiP2E) {
            balaEA2.visible = true;
            balaEA2.x = player2.x + 30.4975;
        }
        if (balaEA2.visible) {
            balaEA2.x = balaEA2.x - 48.796;
            balaEA2.y = player2.y + 48.7619;
        }
        if (balaEA2.x < 3.65) {
            balaEA2.visible = false;
            AtiP2E = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (pistP2 && E2P && tiro2 && AtiP2E) {
            balaEA2.visible = true;
            balaEA2.x = player2.x + 35.7462;
        }
        if (balaEA2.visible) {
            balaEA2.x = balaEA2.x - 57.194;
            balaEA2.y = player2.y + 57.142;
        }
        if (balaEA2.x < 4.27) {
            balaEA2.visible = false;
            AtiP2E = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (pistP2 && E2P && tiro2 && AtiP2E) {
            balaEA2.visible = true;
            balaEA2.x = player2.x + 25;
        }
        if (balaEA2.visible) {
            balaEA2.x = balaEA2.x - 40;
            balaEA2.y = player2.y + 40;
        }
        if (balaEA2.x < 3) {
            balaEA2.visible = false;
            AtiP2E = true;
        }
    }
    if (balaEA2.visible && hitBalaE2 && !tiro2) {
        balaEA2.visible = false;
    }

    //Tiro Missil Player 1 Direita

    if (armaP1 && D1P && !deadP1 && !deadP2 && !pausa) {
        player1.animations.play('armaDP1');
    }
    if (armaP1 && D1P && tiro1 && !AtiP1D) {
        miDA1.visible = true;
    }
    if (alt == 768) {
        if (armaP1 && D1P && tiro1 && AtiP1D) {
            miDA1.visible = true;
            miDA1.x = player1.x + 24.398;
        }
        if (miDA1.visible) {
            miDA1.x = miDA1.x + 24.398;
            miDA1.y = player1.y + 39;
        }
        if (miDA1.x > 1640.766) {
            miDA1.visible = false;
            AtiP1D = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (armaP1 && D1P && tiro1 && AtiP1D) {
            miDA1.visible = true;
            miDA1.x = player1.x + 28.597;
        }
        if (miDA1.visible) {
            miDA1.x = miDA1.x + 28.597;
            miDA1.y = player1.y + 45.7;
        }
        if (miDA1.x > 1923.149) {
            miDA1.visible = false;
            AtiP1D = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (armaP1 && D1P && tiro1 && AtiP1D) {
            miDA1.visible = true;
            miDA1.x = player1.x + 20;
        }
        if (miDA1.visible) {
            miDA1.x = miDA1.x + 20;
            miDA1.y = player1.y + 32;
        }
        if (miDA1.x > 1345) {
            miDA1.visible = false;
            AtiP1D = true;
        }
    }
    if (miDA1.visible && hitMiD1 && !tiro1) {
        miDA1.visible = false;
    }

    //Tiro Missil Player 1 Esquerda

    if (armaP1 && E1P && !deadP1 && !deadP2 && !pausa) {
        player1.animations.play('armaEP1');
    }
    if (armaP1 && E1P && tiro1 && !AtiP1E) {
        miDA1.visible = true;
    }
    if (armaP1 && E1P && tiro1 && AtiP1E) {
        miEA1.visible = true;
        miEA1.x = player1.x;
    }
    if (alt == 768) {
        if (miEA1.visible) {
            miEA1.x = miEA1.x - 24.398;
            miEA1.y = player1.y + 39;
        }
        if (miEA1.x > 1640.766) {
            miEA1.visible = false;
            AtiP1E = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (miEA1.visible) {
            miEA1.x = miEA1.x - 28.597;
            miEA1.y = player1.y + 45.7;
        }
        if (miEA1.x > 1923.149) {
            miEA1.visible = false;
            AtiP1E = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (miEA1.visible) {
            miEA1.x = miEA1.x - 20;
            miEA1.y = player1.y + 32;
        }
        if (miEA1.x > 1345) {
            miEA1.visible = false;
            AtiP1E = true;
        }
    }
    if (miEA1.visible && hitMiE1 && !tiro1) {
        miEA1.visible = false;
    }
    //Tiro Missil Player 2 Direita

    if (armaP2 && D2P && !deadP1 && !deadP2 && !pausa) {
        player2.animations.play('armaDP2');
    }
    if (armaP2 && D2P && tiro2 && !AtiP2D) {
        miDA2.visible = true;
    }
    if (alt == 768) {
        if (armaP2 && D2P && tiro2 && AtiP2D) {
            miDA2.visible = true;
            miDA2.x = player2.x + 24.398;
        }
        if (miDA2.visible) {
            miDA2.x = miDA2.x + 24.398;
            miDA2.y = player2.y + 39;
        }
        if (miDA2.x > 1640.766) {
            miDA2.visible = false;
            AtiP2D = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (armaP2 && D2P && tiro2 && AtiP2D) {
            miDA2.visible = true;
            miDA2.x = player2.x + 28.597;
        }
        if (miDA2.visible) {
            miDA2.x = miDA2.x + 28.597;
            miDA2.y = player2.y + 45.7;
        }
        if (miDA2.x > 1923.149) {
            miDA2.visible = false;
            AtiP2D = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (armaP2 && D2P && tiro2 && AtiP2D) {
            miDA2.visible = true;
            miDA2.x = player2.x + 20;
        }
        if (miDA2.visible) {
            miDA2.x = miDA2.x + 20;
            miDA2.y = player2.y + 32;
        }
        if (miDA2.x > 1345) {
            miDA2.visible = false;
            AtiP2D = true;
        }
    }
    if (miDA2.visible && hitMiD2 && !tiro2) {
        miDA2.visible = false;
    }
    //Tiro Missil Player 2 Esquerda

    if (armaP2 && E2P && !deadP1 && !deadP2 && !pausa) {
        player2.animations.play('armaEP2');
    }
    if (armaP2 && E2P && tiro2 && !AtiP2E) {
        miDA2.visible = true;
    }
    if (armaP2 && E2P && tiro2 && AtiP2E) {
        miEA2.visible = true;
        miEA2.x = player2.x;
    }
    if (alt == 768) {
        if (miEA2.visible) {
            miEA2.x = miEA2.x - 24.398;
            miEA2.y = player2.y + 39;
        }
        if (miEA2.x > 1640.766) {
            miEA2.visible = false;
            AtiP2E = true;
        }
    }
    if (alt == 900 || alt >= 900) {
        if (miEA2.visible) {
            miEA2.x = miEA2.x - 28.597;
            miEA2.y = player2.y + 45.7;
        }
        if (miEA2.x > 1923.149) {
            miEA2.visible = false;
            AtiP2E = true;
        }
    }
    if (alt != 768 && alt != 900 && alt < 900) {
        if (miEA2.visible) {
            miEA2.x = miEA2.x - 20;
            miEA2.y = player2.y + 32;
        }
        if (miEA2.x > 1345) {
            miEA2.visible = false;
            AtiP2E = true;
        }
    }
    if (miEA2.visible && hitMiE2 && !tiro2) {
        miEA2.visible = false;
    }

    music.volume = 1;
    if (game.input.keyboard.isDown(Phaser.Keyboard.ENTER) && (deadP1 || deadP2)) {
        total = 0;
        deadP1 = false;
        deadP2 = false;
        vidaP1 = 0;
        vidaP2 = 0;
        salvou = false;
        game.state.restart();
        reniciou = true;
    }
    if ((deadP1 || deadP2) && !salvou) {
        teste(pontuacao)
        salvou = true;
    }
}

//Timer
function updateCounter() {
    if (!deadP1 && !deadP2 && !pausa) {
        total++;
    }
}
//Pontuacao
function updatePontuacao() {
    if (!deadP1 && !deadP2 && !pausa && pontuacao > 0) {
        pontuacao--;
    }
}
function render() {
    txtTime = game.debug.text('Tempo: ' + total, game.world.centerX, 15);
}