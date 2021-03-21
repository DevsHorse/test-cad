import LineElement from "../elements/LineElement";
import Point from "../elements/Point";


export default class Board {
    private readonly _canvas: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D | null;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._ctx = this._canvas.getContext('2d');
    }

    get canvas(){
        return this._canvas;
    }

    get ctx() {
        return this._ctx;
    }

    setSettings(width: number, height: number) {
        if (this._ctx) {
            this._ctx.canvas.width = width;
            this._ctx.canvas.height = height;
            this._ctx.lineWidth = 1;
            this._ctx.fillStyle = '#f11d1d';
        }
    }

    clear(){
        if (!this._ctx) return;
        this._ctx.clearRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height);
    }
}