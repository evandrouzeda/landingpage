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
            new InfiniteCarrossel(app, "Possue conhecimento em", ["javascript.svg", "typescript.svg", "python.svg", "golang.svg", "pwa.svg", "nodejs.svg", "mongodb.svg", "postgresql.svg", "mysql.svg", "terminal.svg", "linux.svg", "aws.svg", "docker.svg", "figma.svg"]),
            new Portifolio(app),
            new InfiniteCarrossel(app, "Prestou serviço para", ["logo_livtech.svg", "alasmenu-logo.svg", "isologo.svg"]),
        )
    }
}