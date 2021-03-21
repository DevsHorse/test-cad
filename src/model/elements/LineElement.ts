import Point from "./Point";
import LineRenderer from '../render/LineRenderer';
import Line from "./Line";


export default class LineElement {
    private _line: Line;
    private _renderer: LineRenderer = new LineRenderer(this);

    constructor(p1: Point, p2: Point) {
        this._line = new Line(p1, p2);
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

    get renderer(){
        return this._renderer;
    }

    shorten(offset: number) {
        const s1 = this._line.getPointOffset(offset);
        const s2 = this._line.getPointOffset(1 - offset);
        this.p1 = s1;
        this.p2 = s2;
    }
}