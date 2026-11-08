let enjambre = [];
let cantidad = 40;
let limiteVelocidad = 2;

let minimo = 0.02;
let maximo = 0.20;

let ultimo = null;
let senal = 0;
let suavidad = 0.1;

let fuente = "micro";
let mic;
let fallaSimulada = false;

function setup() {
  createCanvas(400, 400);

  mic = new p5.AudioIn();
  mic.start();

  for (let i = 0; i < cantidad; i++) {
    enjambre.push({
      x: random(20, width - 20),
      y: random(20, height - 20),
      vx: random(-limiteVelocidad, limiteVelocidad),
      vy: random(-limiteVelocidad, limiteVelocidad)
    });
  }
}

function mousePressed() {
  userStartAudio();
}

function draw() {
  background(245, 243, 235);

  actualizarSenal();

  for (let a of enjambre) {
    if (hayDatos()) {
      mover(a);
      aplicarBorde(a);
    }
    mostrar(a);
  }

  dibujarIndicadorNivel();
}

function leerCrudo() {
  if (fallaSimulada) {
    return null;
  }
  
  if (fuente === "micro") {
    let nivel = mic.getLevel();
    if (nivel === 0) return null;
    return nivel;
  } else {
    return noise(frameCount * 0.01);
  }
}

function hayDatos() {
  return ultimo !== null;
}

function actualizarSenal() {
  ultimo = leerCrudo();
  if (!hayDatos()) {
    return;
  }
  let s = map(ultimo, minimo, maximo, 0, 1);
  s = constrain(s, 0, 1);
  senal = lerp(senal, s, suavidad);
}

function mover(a) {
  a.x += a.vx;
  a.y += a.vy;
}

function aplicarBorde(a) {
  if (a.x < 10 || a.x > width - 10) {
    a.vx *= -1;
    a.x = constrain(a.x, 10, width - 10);
  }
  if (a.y < 10 || a.y > height - 10) {
    a.vy *= -1;
    a.y = constrain(a.y, 10, height - 10);
  }
}

function mostrar(a) {
  let d = map(senal, 0, 1, 8, 36);
  noStroke();

  if (!hayDatos()) {
    fill(190);
  } else {
    fill(46, 196, 230);
  }

  circle(a.x, a.y, d);
}

function dibujarIndicadorNivel() {
  noStroke();
  fill(220, 218, 230);
  rect(10, height - 30, width - 20, 10);

  if (hayDatos()) {
    fill(20);
    rect(10, height - 30, map(senal, 0, 1, 0, width - 20), 10);
    text("durmiendo", 10, height - 8);
    textAlign(RIGHT);
    text("despiertos", width - 10, height - 8);
    textAlign(LEFT);
  } else {
    fill(120);
    text("sin datos (presiona 'f' o haz clic)", 10, height - 8);
  }
}

function keyPressed() {
  if (key === "f") {
    fallaSimulada = !fallaSimulada;
  }
}
  

