
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

var effect = new THREE.AsciiEffect( renderer );
effect.setSize( window.innerWidth, window.innerHeight);

controls = new THREE.OrbitControls(camera, renderer.domElement)

//create the shape
var geometry = new THREE.BoxGeometry( 1000, 1000, 1000 );

// var cubeMeterials = [ // no light
//     new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/강화형 베릴.png'), side: THREE.DoubleSide }), //RIGHT SIDE
//     new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/거대 스노우맨.png'), side: THREE.DoubleSide }), //LEFT SIDE
//     new THREE.MeshBasicMaterial({color : 0xffffff, wireframe : false}), //TOP SIDE
//     new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/루팡돼지.png'), side: THREE.DoubleSide }), //BOTTOM SIDE
//     new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/세르프.png'), side: THREE.DoubleSide }), //FRONT SIDE
//     new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/타르가.png'), side: THREE.DoubleSide })  //BACK SIDE
// ];

var cubeMeterials = [ // Basic, Phong, Lambert
    new THREE.MeshPhongMaterial({map : new THREE.TextureLoader().load('img/강화형 베릴.png'), side: THREE.DoubleSide }), //RIGHT SIDE
    new THREE.MeshPhongMaterial({map : new THREE.TextureLoader().load('img/거대 스노우맨.png'), side: THREE.DoubleSide }), //LEFT SIDE
    new THREE.MeshPhongMaterial({color : 0x000000, wireframe : false}), //TOP SIDE
    new THREE.MeshPhongMaterial({map : new THREE.TextureLoader().load('img/루팡돼지.png'), side: THREE.DoubleSide }), //BOTTOM SIDE
    new THREE.MeshPhongMaterial({map : new THREE.TextureLoader().load('img/세르프.png'), side: THREE.DoubleSide }), //FRONT SIDE
    new THREE.MeshPhongMaterial({map : new THREE.TextureLoader().load('img/타르가.png'), side: THREE.DoubleSide })  //BACK SIDE
];

// create a naterial, color or image texture
//var material = new THREE.MeshBasicMaterial( {color : 0xffffff, wireframe : false} );
var material = new THREE.MeshFaceMaterial( cubeMeterials );
var cube = new THREE.Mesh( geometry, material );
scene.add(cube);



camera.position.z = 6;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
scene.add(ambientLight);

// var light1 = new THREE.PointLight(0xFF0040, 4, 50);
// //scene.add(light1);

// var light2 = new THREE.PointLight(0x0040FF, 2, 50);
// //scene.add(light2);

// var light3 = new THREE.PointLight(0x80FF80, 4, 50);
// //scene.add(light3);

// var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
// directionalLight.position.set(1, 1, 1);
// //scene.add(directionalLight);

// var spotLight = new THREE.SpotLight(0xFF45F6, 20);
// spotLight.position.set(3,3,3);
// scene.add(spotLight);

// game logic
var update = function() {
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.005;


    var time = Date.now() * 0.0005;

    // light1.position.x = Math.sin(time * 0.7) * 30;
    // light1.position.y = Math.cos(time * 0.5) * 40;
    // light1.position.z = Math.cos(time * 0.3) * 30;
    
    // light2.position.x = Math.sin(time * 0.3) * 30;
    // light2.position.y = Math.cos(time * 0.5) * 40;
    // light2.position.z = Math.cos(time * 0.7) * 30;

    // light3.position.x = Math.sin(time * 0.7) * 30;
    // light3.position.y = Math.cos(time * 0.5) * 40;
    // light3.position.z = Math.cos(time * 0.3) * 30;

};

// draw Scene
var render = function() {
    effect.render( scene, camera);
};

// run game loop (update, render, repeat)
var GameLoop = function() {
    requestAnimationFrame ( GameLoop );

    update();
    render();
};

GameLoop();