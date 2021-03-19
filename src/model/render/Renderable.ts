import Board from "../board/Board";

export default interface Renderable {
    render(board:Board): void;
}