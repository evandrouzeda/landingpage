import Z from "zeyo";
import App from "../../../../app";
import LayoutContainerBreakout from "../../../../componentes/layoutContainer/breakout";
import style from "./style.module.css"
export default class Header extends LayoutContainerBreakout<"header"> {
    constructor(app: App) {
        super("header")
        
        this.class(style.header).children(
            Z("div").class(style.logo).children(
                Z("p").children(
                    Z("b").text("Evandro "),
                    Z("i").text("Uzeda")
                )
            ),
        )
    }
}