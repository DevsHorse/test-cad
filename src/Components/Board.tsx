import React from "react";
import Canvas from "../model/Canvas";
import CanvasContainer from './CanvasContainer'
import Mouse from "../model/Mouse";
import Line from "../model/Line";
import Point from "../model/Point";
import Document from "../model/Document";

type BoardState = {
    startedDraw: boolean
}

class Board extends React.Component<any, BoardState> {
    public canvas: React.RefObject<HTMLCanvasElement>;
    public document: Document;

    constructor(props: any) {
        super(props)
        this.document = new Document();
        this.canvas = React.createRef();
        this.onClick = this.onClick.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.state={startedDraw: false}
    }

    componentDidMount() {
        if (this.canvas?.current) {
            Canvas.addCanvas(this.canvas.current);
            Canvas.canvas.addEventListener('click', this.onClick);
            Canvas.canvas.addEventListener('mousemove', this.onMouseMove);
        }
    }

    onClick() {
        if (!this.state.startedDraw) {
            const startPoint = new Point(Mouse.position.x, Mouse.position.y);
            const line = new Line(startPoint, startPoint);
            this.document.addElement(line);
        }
        this.setState({startedDraw: !this.state.startedDraw});
    }

    onMouseMove() {
        if (this.state.startedDraw) {
            const newP2 = new Point(Mouse.position.x, Mouse.position.y);
            const elements = this.document.getElements();
            this.document.lastElement.p2 = newP2;
            const intersectPoints = Line.getLinesIntersects(elements);
            Canvas.draw(elements, intersectPoints);
        }
    }

    componentWillUnmount() {
        Canvas.canvas.removeEventListener('click', this.onClick);
        Canvas.canvas.removeEventListener('mousemove', this.onMouseMove);
    }

    render() {
        return (
            <CanvasContainer reference={this.canvas}/>
        );
    }
}

export default Board;