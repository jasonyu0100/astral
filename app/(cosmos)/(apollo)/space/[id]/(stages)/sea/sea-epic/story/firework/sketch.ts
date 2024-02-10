// import { RefObject } from 'react';
// import { Firework } from './firework';
// import p5 from 'p5';

// export class FireworkSketch {
//   private fireworks: any[] = [];
//   private width: number;
//   private height: number;
//   private parent: RefObject<HTMLDivElement>;
//   private gravity: p5.Vector | undefined;

//   constructor(
//     p: p5,
//     width: number,
//     height: number,
//     parent: RefObject<HTMLDivElement>,
//   ) {
//     this.width = width;
//     this.height = height;
//     this.parent = parent;
//     p.setup = this.setup.bind(this, p);
//     p.draw = this.draw.bind(this, p);
//     p.width = width;
//     p.height = height;
//     this.gravity = p.createVector(0, 0.05);
//   }

//   public setup(p: p5) {
//     p.createCanvas(this.width, this.height).parent(this.parent.current!);
//     p.colorMode(p.HSB);
//     p.stroke(255);
//     p.strokeWeight(4);
//     p.background(0);
//   }

//   public draw(p: p5) {
//     p.colorMode(p.RGB);
//     p.background(0, 0, 0, 25);

//     if (p.random(1) < 0.04) {
//       this.fireworks.push(new Firework(p, this));
//     }

//     for (let i = this.fireworks.length - 1; i >= 0; i--) {
//       this.fireworks[i].update();
//       this.fireworks[i].show();

//       if (this.fireworks[i].done()) {
//         this.fireworks.splice(i, 1);
//       }
//     }
//   }
// }
