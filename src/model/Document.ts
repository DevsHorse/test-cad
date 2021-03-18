import Line from "./Line";


export default class Document {
    public elements: Array<Line> = [];

    get lastElement() {
        return this.elements[this.elements.length - 1];
    }

    getElements() {
        return this.elements;
    }

    addElement(el: Line) {
        this.elements.push(el);
    }


}