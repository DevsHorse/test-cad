import Point from "./Point";


export default class Line {
    private _p1;
    private _p2;

    constructor(p1: Point, p2: Point) {
        this._p1 = p1;
        this._p2 = p2;
    }

    get p1() {
        return this._p1;
    }

    get p2() {
        return this._p2;
    }

    set p1(point: Point){
        this._p1 = point;
    }

    set p2(point: Point){
        this._p2 = point;
    }

    getPoints() {
        return [this._p1, this._p2];
    }

    static getLinesIntersects(lineElements: Array<Line>): Array<Point> {
        let res = [];
        for (let i=0; i<lineElements.length; i++) {
            for (let j=i+1; j<lineElements.length; j++) {
                const point = lineElements[i].getCrossPoint(lineElements[j]);
                if (point) res.push(point);
            }
        }
        return res;
    }

    private getCrossPoint(line: Line){
        let point = this.getCrossLinePoint(line);
        if(point){
            if( this.between(point.x,this._p1.x, this._p2.x) && this.between(point.x,line._p1.x, line._p2.x) &&
                this.between(point.y,this._p1.y, this._p2.y) && this.between(point.y,line._p1.y, line._p2.y)) {
                return point;
            }
        }
        return null;
    }

    private getCrossLinePoint(line: Line): Point | null {
        let x1 = this._p1.x;
        let y1 = this._p1.y;
        let x2 = this._p2.x;
        let y2 = this._p2.y;
        let x3 = line._p1.x;
        let y3 = line._p1.y;
        let x4 = line._p2.x;
        let y4 = line._p2.y;

        let a1 = y1 - y2;
        let b1 = x2 - x1;
        let a2 = y3 - y4;
        let b2 = x4 - x3;

        let d = a1 * b2 - a2 * b1;
        if( d != 0 ) {
            let c1 = y2 * x1 - x2 * y1;

            let c2 = y4 * x3 - x4 * y3;
            let x = (b1 * c2 - b2 * c1) / d;
            let y = (a2 * c1 - a1 * c2) / d;
            return new Point(x, y);
        }
        return null;
    }

    private between(value: number, a: number, b: number, Eps = 1E-3) {
        let min = Math.min.apply(Math, [a, b]),
            max = Math.max.apply(Math, [a, b]);
        return value + Eps > min && value < max + Eps;
    }
}