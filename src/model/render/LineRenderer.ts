import Renderable from "./Renderable";
import Board from "../board/Board";
import LineElement from '../elements/LineElement'


export default class LineRenderer implements Renderable{
    private _element: LineElement;

    constructor(element:LineElement) {
        this._element = element;
    }

    render(board: Board) {
      const ctx = board.ctx;
      if (ctx==null) return;
      ctx.beginPath();
      ctx.moveTo(this._element.p1.x, this._element.p1.y);
      ctx.lineTo(this._element.p2.x, this._element.p2.y);
      ctx.stroke();    
    }
}