import { Pig } from '../../molecules/pig';

class MinionPig extends Pig {
    constructor(x, y, r) {
        super(x, y, r);
        this.body.render.sprite.texture = 'https://raw.githubusercontent.com/kodsher/LOLCTO/main/src/organisms/pigs/lime.png';
        this.body.render.sprite.xScale = 0.3;
        this.body.render.sprite.yScale = 0.3;
    };
}

export { MinionPig };
