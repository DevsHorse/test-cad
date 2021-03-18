import React from "react";


class CanvasContainer extends React.Component<any> {
    render() {
        return (
            <canvas
                id="canvas"
                width={800}
                height={400}
                ref={this.props.reference}
            />
        );
    }
}

export default CanvasContainer;