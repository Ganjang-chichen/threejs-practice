(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()
import { GLTFLoader } from 'GLTFLoader.js';


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

controls = new THREE.OrbitControls(camera, renderer.domElement);

camera.position.z = 3;

var loader = new THREE.OBJLoader();

loader.load(
    'models/Head.json',

    function(object) {
        scene.add(object);
    }
);


var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.1 );
scene.add( ambientLight );

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