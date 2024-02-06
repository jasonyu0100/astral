export class Particle {
  constructor(p, x, y, hu, firework) {
    this.p = p; // Accept p as an argument and store it in the class property
    this.pos = this.p.createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;

    if (this.firework) {
      this.vel = this.p.createVector(0, this.p.random(-12, -8));
    } else {
      this.vel = this.p.createVector(
        this.p.random(-2, 2),
        this.p.random(-2, 2),
      );
      this.vel.mult(10);
    }

    this.acc = this.p.createVector(0, 0);
  }

  done() {
    return this.lifespan < 0;
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    this.p.colorMode(this.p.HSB);
    if (!this.firework) {
      this.p.strokeWeight(5);
      this.p.stroke(this.hu, 255, 255, this.lifespan);
    } else {
      this.p.strokeWeight(10);
      this.p.stroke(this.hu, 255, 255);
    }

    this.p.point(this.pos.x, this.pos.y);
  }
}
