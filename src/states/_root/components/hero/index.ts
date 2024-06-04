import Z, { ZeyoAs } from "zeyo";
import LayoutContainerSection from "../../../../componentes/layoutContainer/section";
import App from "../../../../app";
import style from "./style.module.css"

export default class Hero extends LayoutContainerSection {
    constructor(app: App){
        super()
        this.class(style.hero).children(
            Z("h1").class(style["primeiro"]).text("Webdesigner"),
            Z("h1").class(style["segundo"]).text("&"),
            Z("h1").class(style["terceiro"]).text("Fullstack"),
            Z("h1").class(style["quarto"]).text("developer")
        )
    }
}