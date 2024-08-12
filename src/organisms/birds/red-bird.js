import { Bird } from '../../molecules/bird';

class RedBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        this.setTexture('./Lemon.png', 0.4, 0.4); // Set the lemon.png texture with scaling
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
