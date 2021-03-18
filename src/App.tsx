import React from 'react';
import Board from './Components/Board';
import Mouse from "./model/Mouse";
import CollapseButton from "./Components/CollapseButton";

class App extends React.Component {
    componentDidMount() {
        const canvas = document.querySelector('#canvas');
        if (canvas instanceof HTMLCanvasElement) {
            const canvasBCR = canvas.getBoundingClientRect();
            canvas.addEventListener('mousemove',  e => {
                Mouse.setPosition(e.clientX - canvasBCR.left,e.clientY - canvasBCR.top);
            });
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Board />
                </div>

                <CollapseButton />
            </div>
        );
    }
}

export default App;
