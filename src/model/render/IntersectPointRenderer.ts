import Renderable from "./Renderable";
import Board from "../board/Board";
import Point from '../elements/Point'


export default class IntersectPointRenderer implements Renderable{
    private _element: Point;

    constructor(element: Point) {
        this._element = element;
    }

    render(board: Board) {
        const ctx = board.ctx;
        if (ctx==null) return;
        ctx.beginPath ();
        ctx.arc (this._element.x, this._element.y, 5, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
    }
}