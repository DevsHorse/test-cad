import IntersectPointRenderer from '../render/IntersectPointRenderer';

export default class Point {
    public x: number;
    public y: number;
    private _renderer: IntersectPointRenderer = new IntersectPointRenderer(this);

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get renderer(){
        return this._renderer;
    }
}