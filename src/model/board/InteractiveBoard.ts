import Board from "./Board";
import MouseListener from "./MouseListener";


export default class InteractiveBoard extends Board implements MouseListener {
    public realMousePosition: {x: number, y: number} = {x: 0, y: 0};
    public startDraw: boolean = false;
    public isCollapsed: boolean = false;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.canvas.addEventListener("click", e=>this.mouseClick(e));
        this.canvas.addEventListener("mousemove", e=>this.mouseMove(e));
        this.canvas.addEventListener('contextmenu', e=>this.contextmenuClick(e));
    }

    mouseClick(e: MouseEvent) {
        this.startDraw = !this.startDraw;
    }

    mouseMove(e: MouseEvent) {
        const canvasBCR = this.canvas.getBoundingClientRect();
        this.realMousePosition = {x: e.clientX - canvasBCR.left, y: e.clientY - canvasBCR.top};
    }

    contextmenuClick(e: MouseEvent){
        e.preventDefault()
        this.startDraw = false;
    }

    toggleEventsDisable() {
        this.isCollapsed = !this.isCollapsed;
    }
}