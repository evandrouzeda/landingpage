import Z, { ZeyoAs } from "zeyo";
import App from "../../app";
import style from "./style.module.css"

export default class ToggleSwitch extends ZeyoAs<"label"> {
    input: ZeyoAs<"input"> = Z("input").set("type", "checkbox")
    constructor(app: App){
        super("label")
        this.class(style.switch).children(
            this.input,
            Z("span").class(style.slider, style.round)
        )
    }
    getValue() {
        return this.input.element.checked
    }
    setValue(value: boolean) {
        return this.input.element.checked = value
    }
    checked(){
        this.input.element.checked = true
        return this
    }
    onChange(cb: (o: this) => void) {
        this.input.object(o => {
            o.element.onchange = () => cb(this)
        })
        return this
    }
}