import { Body } from '../atoms/body';
import Matter from 'matter-js';

class Bird extends Body {
    constructor(x, y, r) {
        super();
        this.body = Matter.Bodies.circle(x, y, r, {
            density: 0.005,
            render: {
                sprite: {
                    texture: '', // Set an empty texture by default
                    xScale: 1,
                    yScale: 1
                }
            }
        });
        this.isAbility = true;
    }

    setTexture(texture, xScale = 1, yScale = 1) {
        this.body.render.sprite.texture = texture;
        this.body.render.sprite.xScale = xScale;
        this.body.render.sprite.yScale = yScale;
    }
}

export { Bird };
