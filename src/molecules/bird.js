import { Body } from '../atoms/body';
import Matter from 'matter-js';

class Bird extends Body {
    constructor(x, y, r) {
        super();
        this.body = Matter.Bodies.circle(x, y, r, {
            density: 0.005
        });
        this.isAbility = true;
    }
}

export { Bird };
