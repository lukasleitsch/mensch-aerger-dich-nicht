/*
 * Diese Script Datei erstellt das Spielfeld bzw. das Spielbrett
 */

var spielfelder = new Array(40);
var gewinnfelder = new Array(4);
var hausfelder = new Array(4);

// Variablen und Werte fuer die Spielfelder
var radius = 0.35;
var segmente = 50;

// Spielfigur

function spielfigure(color, positionX, positionY) {

    group = new THREE.Object3D();

    // Fuß

    var geometry = new THREE.CylinderGeometry( 0.3, 0.3, 0.3, segmente );
    var material = new THREE.MeshPhongMaterial( {color: color} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    group.add(cylinder);


    //Körper

    var geometry = new THREE.CylinderGeometry( 0, 0.3, 1, segmente );
    var material = new THREE.MeshPhongMaterial( {color: color} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.setY(0.65);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    group.add(cylinder);

    // Kopf

    var geometry = new THREE.SphereGeometry( 0.23, 32, segmente );
    var material = new THREE.MeshPhongMaterial( {color: color} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.setY(1);
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    group.add(sphere);
    group.position.set(positionX, 0, positionY);

    scene.add(group);
}

// THREE.JS

// Erstellt die Scene auf der "gearbeitet" wird
var scene = new THREE.Scene();

// Erstellt eine Kamera mit den Attributen
var camera = new THREE.PerspectiveCamera(75,
       window.innerWidth / window.innerHeight, 0.1, 1000);
   
// Erstellt Lichter
var ambientLight = new THREE.AmbientLight(0x404040);
var directionalLight = new THREE.DirectionalLight(0xdfebff);


// Erstellt den Renderer
var renderer = new THREE.WebGLRenderer({
 antialias: true,
 alpha: true
});

renderer.shadowMapEnabled = true;   
renderer.shadowMapSoft = true;
renderer.shadowMapType = THREE.PCFShadowMap;

       
// Setzt die Kamera an den beschrieben Ort
function setzeKamera() {
 camera.position.set(10, 10, 0);
 camera.up.set( 0, 1, 0 );
 camera.lookAt(scene.position);
}

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('spielfeld').appendChild(renderer.domElement );
// document.body.appendChild(renderer.domElement);

// Richtungslicht nach oben setzen
directionalLight.position.set(80, 100, 80);

directionalLight.castShadow = true;
directionalLight.shadowCameraVisible = false;

directionalLight.shadowMapWidth = 4096;
directionalLight.shadowMapHeight = 4096;

var d = 11;

directionalLight.shadowCameraLeft = -d;
directionalLight.shadowCameraRight = d;
directionalLight.shadowCameraTop = d;
directionalLight.shadowCameraBottom = -d;

directionalLight.shadowCameraFar = 200;
directionalLight.shadowDarkness = 0.2;

// Licher der Scene hinzufuegen
scene.add(directionalLight);
scene.add(ambientLight);

// Setzt die Kamera in Position
setzeKamera();

scene.add(camera);

// Maussteuerung

controls = new THREE.OrbitControls( camera );
controls.damping = 0.2;
controls.addEventListener( 'change', render );

// Loop-Funktion aufrufen
var render = function() {
 requestAnimationFrame(render);

 renderer.render(scene, camera);
};
render();

// Beginnt das Spiel
//beginneSpiel(4);


// END THREE.JS

/*
 * Erstellt das Spielfeld mit Huetchen im 'Haus'
 */

var geometry = new THREE.BoxGeometry(11, 0.1, 11);
var material = new THREE.MeshPhongMaterial({
  color: 0xF1B55B
});
var cube = new THREE.Mesh(geometry, material);
cube.receiveShadow = true;
scene.add(cube);



/*
* Initialisiert ein Array mit geometrischen Kreisen
* Das Spielfeld beginnt mit dem Startplatz der Farbe Rot und
* hat insgesamt 40 Felder zu denen noch die Gewinnfelder und die Haus-
* felder kommen.
*/
var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, 0.2, segmente);
// Material fuer Spielfelder
var materialCylinder = new THREE.MeshPhongMaterial({
color: 0xFFFFFF
});
// Materialfarbe fuer Spieler Gelb
var materialGelb = new THREE.MeshPhongMaterial({
color: 0xFFFC00
});
// Materialfarbe fuer Spieler Gruen
var materialGruen = new THREE.MeshPhongMaterial({
color: 0x2EAE00
});
// Materialfarbe fuer Spieler Blau
var materialBlau = new THREE.MeshPhongMaterial({
color: 0x2600FF
});
// Materialfarbe fuer Spieler Rot
var materialRot = new THREE.MeshPhongMaterial({
color: 0xFF0000
});

/*
* Fuegt dem Array spielfelder die Geometrie des Zylinders und der Farbe
* der normalen Spielfelder hinzu
*/
for (var i = 0; i < spielfelder.length; i++) {
spielfelder[i] = new THREE.Mesh(cylinderGeometry, materialCylinder);
}

/*
* Setzt die Position der einzelnen Spielfelder auf dem gesamten Spielbrett
* fest und fuegt sie der Szene hinzu
*/
spielfelder[0].position.set(-1, 0, -5);
spielfelder[1].position.set(-1, 0, -4);
spielfelder[2].position.set(-1, 0, -3);
spielfelder[3].position.set(-1, 0, -2);
spielfelder[4].position.set(-1, 0, -1);
spielfelder[5].position.set(-2, 0, -1);
spielfelder[6].position.set(-3, 0, -1);
spielfelder[7].position.set(-4, 0, -1);
spielfelder[8].position.set(-5, 0, -1);
spielfelder[9].position.set(-5, 0, 0);
spielfelder[10].position.set(-5, 0, 1);
spielfelder[11].position.set(-4, 0, 1);
spielfelder[12].position.set(-3, 0, 1);
spielfelder[13].position.set(-2, 0, 1);
spielfelder[14].position.set(-1, 0, 1);
spielfelder[15].position.set(-1, 0, 2);
spielfelder[16].position.set(-1, 0, 3);
spielfelder[17].position.set(-1, 0, 4);
spielfelder[18].position.set(-1, 0, 5);
spielfelder[19].position.set(0, 0, 5);
spielfelder[20].position.set(1, 0, 5);
spielfelder[21].position.set(1, 0, 4);
spielfelder[22].position.set(1, 0, 3);
spielfelder[23].position.set(1, 0, 2);
spielfelder[24].position.set(1, 0, 1);
spielfelder[25].position.set(2, 0, 1);
spielfelder[26].position.set(3, 0, 1);
spielfelder[27].position.set(4, 0, 1);
spielfelder[28].position.set(5, 0, 1);
spielfelder[29].position.set(5, 0, 0);
spielfelder[30].position.set(5, 0, -1);
spielfelder[31].position.set(4, 0, -1);
spielfelder[32].position.set(3, 0, -1);
spielfelder[33].position.set(2, 0, -1);
spielfelder[34].position.set(1, 0, -1);
spielfelder[35].position.set(1, 0, -2);
spielfelder[36].position.set(1, 0, -3);
spielfelder[37].position.set(1, 0, -4);
spielfelder[38].position.set(1, 0, -5);
spielfelder[39].position.set(0, 0, -5);

// Fuegt die Spielfelder der Szene hinzu
for (var i = 0; i < spielfelder.length; i++) {
  spielfelder[i].castShadow = true;
  spielfelder[i].receiveShadow = true;
  scene.add(spielfelder[i]);
}

/*
* Initialisiert Haus- und Gewinnfelder mit dem jeweiligen Material bzw.
* der Farbe
*/
for (var i = 0; i < 4; i++) {
  gewinnfelder[i] = new Array(4);
  hausfelder[i] = new Array(4);

  if (i === 0) {
    for (var j = 0; j < 4; j++) {
      gewinnfelder[i][j] = new THREE.Mesh(cylinderGeometry, materialRot);
      hausfelder[i][j] = new THREE.Mesh(cylinderGeometry, materialRot);
    }
  }
  if (i === 1) {
    for (var j = 0; j < 4; j++) {
      gewinnfelder[i][j] = new THREE.Mesh(cylinderGeometry, materialBlau);
      hausfelder[i][j] = new THREE.Mesh(cylinderGeometry, materialBlau);

    }
  }
  if (i === 2) {
    for (var j = 0; j < 4; j++) {
      gewinnfelder[i][j] = new THREE.Mesh(cylinderGeometry, materialGruen);
      hausfelder[i][j] = new THREE.Mesh(cylinderGeometry, materialGruen);

    }
  }
  if (i === 3) {
    for (var j = 0; j < 4; j++) {
      gewinnfelder[i][j] = new THREE.Mesh(cylinderGeometry, materialGelb);
      hausfelder[i][j] = new THREE.Mesh(cylinderGeometry, materialGelb);

    }
  }
}

// Positionen fuer Rot
hausfelder[0][0].position.set(-5, 0, -5);
hausfelder[0][1].position.set(-4, 0, -5);
hausfelder[0][2].position.set(-4, 0, -4);
hausfelder[0][3].position.set(-5, 0, -4);
gewinnfelder[0][0].position.set(-4, 0, 0);
gewinnfelder[0][1].position.set(-3, 0, 0);
gewinnfelder[0][2].position.set(-2, 0, 0);
gewinnfelder[0][3].position.set(-1, 0, 0);

// Positionen fuer Blau
hausfelder[1][0].position.set(-5, 0, 5);
hausfelder[1][1].position.set(-5, 0, 4);
hausfelder[1][2].position.set(-4, 0, 4);
hausfelder[1][3].position.set(-4, 0, 5);
gewinnfelder[1][0].position.set(0, 0, 4);
gewinnfelder[1][1].position.set(0, 0, 3);
gewinnfelder[1][2].position.set(0, 0, 2);
gewinnfelder[1][3].position.set(0, 0, 1);

// Positionen fuer Gruen
hausfelder[2][0].position.set(5, 0, 5);
hausfelder[2][1].position.set(4, 0, 5);
hausfelder[2][2].position.set(4, 0, 4);
hausfelder[2][3].position.set(5, 0, 4);
gewinnfelder[2][0].position.set(4, 0, 0);
gewinnfelder[2][1].position.set(3, 0, 0);
gewinnfelder[2][2].position.set(2, 0, 0);
gewinnfelder[2][3].position.set(1, 0, 0);

// Positionen fuer Gelb
hausfelder[3][0].position.set(5, 0, -5);
hausfelder[3][1].position.set(5, 0, -4);
hausfelder[3][2].position.set(4, 0, -4);
hausfelder[3][3].position.set(4, 0, -5);
gewinnfelder[3][0].position.set(0, 0, -4);
gewinnfelder[3][1].position.set(0, 0, -3);
gewinnfelder[3][2].position.set(0, 0, -2);
gewinnfelder[3][3].position.set(0, 0, -1);

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    gewinnfelder[i][j].castShadow = true;
    gewinnfelder[i][j].receiveShadow = true;
    hausfelder[i][j].castShadow = true;
    hausfelder[i][j].receiveShadow = true;
    scene.add(gewinnfelder[i][j]);
    scene.add(hausfelder[i][j]);
  }
}