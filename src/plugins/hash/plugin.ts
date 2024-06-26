import { ZeyoAppConstructor } from "../lib";
import H from "."

export default function HashPlugin<Base extends ZeyoAppConstructor>(base: Base) {
    return class extends base {
        hash = new H()
        setHash(){
            window.onhashchange = e => {
                if (e.newURL.split("#").length > 1)
                    this.hash.on = true
                else this.hash.remove()
            }
        }
    }
}