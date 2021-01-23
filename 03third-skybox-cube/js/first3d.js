
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
var geometry = new THREE.CubeGeometry( 1000, 1000, 1000 );



var cubeMaterials = [ // Basic, Phong, Lambert
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/front.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/back.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/up.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/down.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/right.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/left.jpg"), side: THREE.DoubleSide})
];

var Material = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, Material);
scene.add(cube);


camera.position.z = 3;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.3);
scene.add(ambientLight);



// game logic
var update = function() {
    
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.005;


    // var time = Date.now() * 0.0005;


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