import Renderable from "./Renderable";
import Board from "../board/Board";


export default class ElementRenderer<T> implements Renderable{
    private _element:T;

    constructor(element:T) {
        this._element = element;
    }

    render(board: Board) {
        board.drawElement<T>(this._element);
    }
}