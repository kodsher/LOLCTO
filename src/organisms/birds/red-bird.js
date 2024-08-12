import { Bird } from '../../molecules/bird';

class RedBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        // Using the raw GitHub URL for the lemon image
        this.body.render.sprite.texture = 'https://raw.githubusercontent.com/kodsher/LOLCTO/main/src/organisms/birds/lemon.png';
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
