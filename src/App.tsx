import React from 'react';
import AppBoard from "./model/AppBoard";

class App extends React.Component {
    public canvasWrapper: any = null;
    public board: any;
    constructor(props: any) {
        super(props);
        this.collapseHandler = this.collapseHandler.bind(this);
    }

    componentDidMount() {
        const board = new AppBoard(document.createElement('canvas'));
        board.setSettings(1000, 500);
        this.canvasWrapper.appendChild(board.canvas);
        this.board = board;
    }

    collapseHandler(e: React.MouseEvent) {
        e.preventDefault();
        this.board.collapseHandler();
    }

    render() {
        return (
            <div className="App">
                <div
                    className="container"
                    ref={(node)=>this.canvasWrapper=node}
                />
                <button className="collapse-btn" onClick={this.collapseHandler}>
                    Collapse lines
                </button>
            </div>
        );
    }
}

export default App;
