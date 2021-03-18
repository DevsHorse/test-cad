import Line from "./Line";
import Point from "./Point";


export default class Canvas {
    static canvas: HTMLCanvasElement;
    static ctx: CanvasRenderingContext2D | null;

    static addCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.updateCTX();
    }

    static updateCTX() {
        this.ctx = this.canvas.getContext('2d');
        if (this.ctx) {
            this.ctx.lineWidth = 1;
            this.ctx.fillStyle = '#f11d1d';
        }
    }

    static draw(elements: Array<Line>, intersectPoints: Array<Point>) {
        if (!this.ctx) return;
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        for (let line of elements) {
            this.ctx.beginPath();
            this.ctx.moveTo(line.p1.x, line.p1.y);
            this.ctx.lineTo(line.p2.x, line.p2.y);
            this.ctx.stroke();
        }
        for (let point of intersectPoints) {
            this.ctx.beginPath ();
            this.ctx.arc (point.x, point.y, 5, 0, Math.PI * 2, false);
            this.ctx.fill();
            this.ctx.stroke();
        }
        this.updateCTX();
    }
}