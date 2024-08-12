import { Bird } from '../../molecules/bird';

class RedBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        // Updated to use the lemon.png texture with correct dimensions
        this.body.render.sprite.texture = './lemon.png'; // Set to local lemon.png
        this.body.render.sprite.xScale = 0.4;
        this.body.render.sprite.yScale = 0.4;
    }

    // Red bird ability
    ability() {
        if (this.isAbility) {
            console.log("I'm cute!!");
            this.isAbility = false;
        }
    }
}

export { RedBird };
