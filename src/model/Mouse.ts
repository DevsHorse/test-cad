
export type PositionType = {x: number, y: number};

export default class Mouse {
    static position: PositionType = {x: 0, y: 0};
    static setPosition(x: number, y: number) {
        this.position = {x, y};
    }
}