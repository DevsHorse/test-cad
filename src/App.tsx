import React from 'react';
import AppBoard from "./model/AppBoard";

class App extends React.Component {
    public canvasContainer: any = null;
    public board: any = null;
    constructor(props: any) {
        super(props);
        this.collapseHandler = this.collapseHandler.bind(this);
    }

    componentDidMount() {
        const board = new AppBoard(document.createElement('canvas'));
        board.setSettings(1000, 500);
        this.canvasContainer.appendChild(board.canvas);
        this.board = board;
    }

    collapseHandler(e: React.MouseEvent) {
        e.preventDefault();
        this.board.collapse();
    }

    render() {
        return (
            <div className="App">
                <div
                    className="container"
                    ref={(node)=>this.canvasContainer=node}
                />
                <button className="collapse-btn" onClick={this.collapseHandler}>
                    Collapse lines
                </button>
            </div>
        );
    }
}

export default App;
