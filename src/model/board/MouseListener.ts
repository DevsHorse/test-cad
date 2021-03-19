
export default interface MouseListener {
    mouseMove(e:MouseEvent): void;
    mouseClick(e:MouseEvent): void;
    contextmenuClick(e:MouseEvent): void;
}
