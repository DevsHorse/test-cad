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

    drawElement<T>(element: T){
        if (element instanceof LineElement) {
            this.drawLine(element);
        } else if (element instanceof Point) {
            this.drawPoint(element);
        }
    }

    drawLine(line: LineElement) {
        if (!this._ctx) return;
        this._ctx.beginPath();
        this._ctx.moveTo(line.p1.x, line.p1.y);
        this._ctx.lineTo(line.p2.x, line.p2.y);
        this._ctx.stroke();
    }

    drawPoint(point: Point) {
        if (!this._ctx) return;
        this._ctx.beginPath ();
        this._ctx.arc (point.x, point.y, 5, 0, Math.PI * 2, false);
        this._ctx.fill();
        this._ctx.stroke();
    }
}