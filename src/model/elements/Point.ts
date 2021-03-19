import ElementRenderer from "../render/ElementRenderer";

export default class Point {
    public x: number;
    public y: number;
    private _renderer: ElementRenderer<Point> = new ElementRenderer<Point>(this);

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get renderer(){
        return this._renderer;
    }
}