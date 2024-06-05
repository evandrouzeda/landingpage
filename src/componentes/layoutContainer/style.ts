import style from "./style.module.css"
import { AddOnConstructor } from "../addOn/lib";

export default function LayoutContainerStyles<Base extends AddOnConstructor>(base: Base) {
    return class extends base {
        layout = {
            free: style.free,
            grid: style.grid,
            fullWidth: style["full-width"],
            fullWidthOnly: style["full-width-only"],
        }

    }
}