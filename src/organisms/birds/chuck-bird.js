import { Bird } from '../../molecules/bird';

class ChuckBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        this.body.render.sprite.texture = './lemon.png'; // Set texture to lemon.png in the same folder
        this.body.render.sprite.xScale = 0.5;
        this.body.render.sprite.yScale = 0.5;
    };

    // Chuck bird ability
    ability() {
        if (this.isAbility) {
            let body = this.body;
            if (body.force.x == 0) {
                body.force.x += 0.7;
                setTimeout(() => {
                    body.force.x = 0;
                }, 500);
            }
            this.isAbility = false;
        }
    }
}

export { ChuckBird };
