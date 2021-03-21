import InteractiveBoard from "./board/InteractiveBoard";
import Point from "./elements/Point";
import Line from "./elements/LineElement";
import Document from "./Document";

export default class AppBoard extends InteractiveBoard {
    private _document: Document = new Document();

    mouseClick(e: MouseEvent) {
        if (this.isCollapsed) return;
        if (!this.startDraw) {
            this.addNewLine();
        }
        super.mouseClick(e);
    }

    addNewLine() {
        const startPoint = new Point(this.realMousePosition.x, this.realMousePosition.y);
        const line = new Line(startPoint, startPoint);
        this._document.addElement(line);
    }

    mouseMove(e: MouseEvent) {
        if (this.isCollapsed) return;
        super.mouseMove(e);
        if (this.startDraw) {
            this._document.moveLastLine(new Point(this.realMousePosition.x, this.realMousePosition.y));
        }
        this.render();
    }

    contextmenuClick(e:MouseEvent){
        if (this.startDraw) {
            this._document.deleteLastElement();
        }
        super.contextmenuClick(e);
    }

    collapseHandler() {
        if (this.isCollapsed) return;
        this.toggleEventsDisable();
        const step = 0.5 / 30;
        let animId:any=null;
        const animation = () => {
            animId = requestAnimationFrame(animation);
            for (let el of this._document.elements) {
                el.shorten(step);
            }
            this._document.setPoints();
            this.render();
        }
        animId = requestAnimationFrame(animation);
        setTimeout(()=>{
            cancelAnimationFrame(animId);
            this._document.clear();
            this.render();
            this.toggleEventsDisable();
        }, 3000);
    }

   

    render() {
        if (this._document) {
            this._document.render(this);
        }
    }
}