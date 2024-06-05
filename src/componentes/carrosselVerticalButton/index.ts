import Z, { Zeyo, ZeyoAs } from "zeyo";
import style from "./style.module.css"

export default class CarrosselVerticalButton extends ZeyoAs<"div"> {
    constructor(container: Zeyo) {
        super("div")
        this.class(style.container).children(
            Z("i").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`),
            container.class(style.body),
            Z("i").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`)
        )
    }
}