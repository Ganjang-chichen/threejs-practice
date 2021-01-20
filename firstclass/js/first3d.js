
var scene = new THREE.Scene( );

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', (e) => {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize( width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement)

//create the shape
var geometry = new THREE.BoxGeometry( 1, 1.5, 1 );
var cubeMeterials = [
    new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/강화형 베릴.png'), side: THREE.DoubleSide }), //RIGHT SIDE
    new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/거대 스노우맨.png'), side: THREE.DoubleSide }), //LEFT SIDE
    new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/군단장 윌.png'), side: THREE.DoubleSide }), //TOP SIDE
    new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/루팡돼지.png'), side: THREE.DoubleSide }), //BOTTOM SIDE
    new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/세르프.png'), side: THREE.DoubleSide }), //FRONT SIDE
    new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/타르가.png'), side: THREE.DoubleSide })  //BACK SIDE
];

// create a naterial, color or image texture
var material = new THREE.MeshBasicMaterial( {color : 0xffffff, wireframe : false} );
var cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 3;

// game logic
var update = function() {
    
};

// draw Scene
var render = function() {
    renderer.render( scene, camera);
};

// run game loop (update, render, repeat)
var GameLoop = function() {
    requestAnimationFrame ( GameLoop );

    update();
    render();
};

GameLoop();