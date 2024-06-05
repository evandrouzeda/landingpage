import Z, { Zeyo, ZeyoAs } from "zeyo";
import style from "./style.module.css"

export default class CarrosselVerticalButton extends ZeyoAs<"div"> {
    container: Zeyo
    constructor(container: Zeyo) {
        super("div")
        this.class(style.container).children(
            Z("button").click(() => this.movedown()).HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`),
            container.class(style.body),
            Z("button").click(() => this.moveup()).HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`)
        )
        this.container = container
        this.getReady()
    }

    getReady() {
        this.container.element.children[0].classList.add(style.show)
    }

    index = 0
    moveup() {
        if(this.index === this.container.element.children.length - 1) return this.invert(false)
        this.container.element.children[this.index].classList.add(style.off)
        this.container.element.children[this.index].classList.remove(style.show)
        this.index++
        this.container.element.children[this.index].classList.add(style.show)
    }
    
    movedown() {
        if(this.index === 0) return this.invert(true)
        this.container.element.children[this.index].classList.remove(style.show)
        this.index--
        this.container.element.children[this.index].classList.remove(style.off)
        this.container.element.children[this.index].classList.add(style.show)
    }

    invert(down: boolean) {
        if(down) {
            for (const child of this.container.element.children) {
                child.classList.add(style.off)
                child.classList.remove(style.show)
            }
            this.index = this.container.element.children.length -1;
            this.container.element.children[this.index].classList.add(style.show)
            this.container.element.children[this.index].classList.remove(style.off)
        }else {
            for (const child of this.container.element.children) {
                child.classList.remove(style.show)
                child.classList.remove(style.off)
            }
            this.index = 0
            this.container.element.children[this.index].classList.add(style.show)
        }
    }
}