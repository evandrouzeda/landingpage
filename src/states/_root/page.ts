import App from "../../app";
import LayoutContainer from "../../componentes/layoutContainer";
import InfiniteCarrossel from "./components/infiniteCarrossel";
import Header from "./components/hearder";
import Hero from "./components/hero";
import Portifolio from "./components/portifolio";
import style from "./style.module.css"

export default class RootPage extends LayoutContainer {
    constructor(app: App) {
        super()
        this.class(style.main).children(
            new Header(app),
            new Hero(app),
            new InfiniteCarrossel(app, "Trabalhou em:", ["logo_livtech.svg", "alasmenu-logo.svg", "isologo.svg"]),
            new Portifolio(app),
            new InfiniteCarrossel(app, "Tecnologias utilizadas:", ["javascript.svg", "typescript.svg", "python.svg", "golang.svg", "pwa.svg", "mongodb.svg", "nodejs.svg", "postgresql.svg", "mysql.svg"]),
        )
    }
}