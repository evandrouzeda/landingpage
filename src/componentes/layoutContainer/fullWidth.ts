import { ZeyoAs } from "zeyo";
import LayoutContainerStyles from "./style";

export default class LayoutContainerFullWidth<T extends keyof HTMLElementTagNameMap> extends LayoutContainerStyles(ZeyoAs<keyof HTMLElementTagNameMap>) {
    constructor(tagName: T){
        super(tagName)
        this.class(this.layout.fullWidth)
    }
}