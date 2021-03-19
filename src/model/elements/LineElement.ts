import Point from "./Point";
import ElementRenderer from "../render/ElementRenderer";
import Line from "./Line";


export default class LineElement {
    private _line: Line;
    private _renderer: ElementRenderer<LineElement> = new ElementRenderer<LineElement>(this);

    constructor(p1: Point, p2: Point) {
        this._line = new Line(p1, p2);
    }

    get renderer(){
        return this._renderer;
    }

    get p1() {
        return this._line._p1;
    }

    get p2() {
        return this._line._p2;
    }

    set p1(point: Point){
        this._line._p1 = point;
    }

    set p2(point: Point){
        this._line._p2 = point;
    }

    get line(){
        return this._line;
    }

    getPoints() {
        return [this._line._p1, this._line._p2];
    }

    shorten(offset: number) {
        const s1 = this._line.getPointOffset(offset);
        const s2 = this._line.getPointOffset(1 - offset);
        this.p1 = s1;
        this.p2 = s2;
    }
}