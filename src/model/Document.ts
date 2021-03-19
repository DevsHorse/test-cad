import LineElement from "./elements/LineElement";
import Board from "./board/Board";
import Renderable from "./render/Renderable";
import Point from "./elements/Point";
import Line from "./elements/Line";


export default class Document implements Renderable {
    private _elements: Array<LineElement> = [];
    private _intersectPoints: Array<Point> = [];

    get lastElement() {
        return this._elements[this._elements.length - 1];
    }

    get elements() {
        return this._elements;
    }

    setPoints() {
        this._intersectPoints = Line.getLinesIntersects(this._elements);
    }

    addElement(el: LineElement) {
        this._elements.push(el);
    }

    moveLastLine(point: Point){
        this._elements[this._elements.length - 1].p2 = point;
        this.setPoints();
    }

    deleteLastElement() {
        this._elements.pop();
        this.setPoints();
    }

    clear() {
        this._elements = [];
    }

    render(board: Board) {
        const elements = [...this._elements, ...this._intersectPoints];
        board.clear();
        for (let el of elements) {
            el.renderer.render(board);
        }
    }
}