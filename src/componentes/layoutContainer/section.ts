import { ZeyoAs } from "zeyo";
import LayoutContainerStyles from "./style";

export default class LayoutContainerSection extends LayoutContainerStyles(ZeyoAs<"section">) {
    constructor(){
        super("section")
    }
}