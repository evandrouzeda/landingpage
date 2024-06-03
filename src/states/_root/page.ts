import Z, { ZeyoAs } from "zeyo";
import App from "../../app";

export default class RootPage extends ZeyoAs<"main"> {
    constructor(app: App){
        super("main")
        this.children(
            Z("h1").text("Início de tudo")
        )
    }
}