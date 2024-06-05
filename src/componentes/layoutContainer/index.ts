import { ZeyoAs } from "zeyo";
import LayoutContainerStyles from "./style";

export default class LayoutContainer extends LayoutContainerStyles(ZeyoAs<"main">) {
    constructor(){
        super("main")
        this.class(this.layout.grid)
    }
}