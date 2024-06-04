import App from "../../app";
import LayoutContainer from "../../componentes/layoutContainer";
import Header from "./components/hearder";
import Hero from "./components/hero";
import Portifolio from "./components/portifolio";
import style from "./style.module.css"

export default class RootPage extends LayoutContainer {
    constructor(app: App){
        super()
        this.class(style.main).children(
            new Header(app),
            new Hero(app),
            new Portifolio(app)
        )
    }
}