import Z from "zeyo";
import App from "../../../../app";
import style from "./style.module.css"
import LayoutContainerFullWidth from "../../../../componentes/layoutContainer/fullWidth";
export default class InfiniteCarrossel extends LayoutContainerFullWidth<"section"> {
    constructor(app: App, title: string, images: string[]) {
        super("section")
        this.class(style.section).children(
            Z("h2").class(this.layout.free).text(title),
            Z("div").class(style.brands, this.layout.free, this.layout.fullWidthOnly).children(
                ...Array(6).fill("").map(() => Z("span").class(images.length > 5 ? style.slow : style.fast).children(
                    ...images.map(i => Z("img").set("src", `/_img/${i}`))
                ))
            ),
        )
    }
}