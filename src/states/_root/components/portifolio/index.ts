import Z, { ZeyoAs } from "zeyo";
import LayoutContainerSection from "../../../../componentes/layoutContainer/section";
import App from "../../../../app";
import style from "./style.module.css"

export default class Portifolio extends LayoutContainerSection {
    constructor(app: App){
        super()
        this.class(style.portifolio).children(
            Z("div").class(style.primeiro, style.verde).children(
                Z("p").text("Landing Page"),
                Z("div")
            ),
            Z("div").class(style.segundo, style.amarelo).children(
                Z("p").text("Aplicativo para automação residencial"),
                Z("div")
            ),
            Z("div").class(style.terceiro, style.azul).children(
                Z("p").text("Skill Alexa para integrar via Lambda com a Plataforma de automação residencial"),
                Z("div")
            ),
            Z("div").class(style.quarto, style.vermelho).children(
                Z("p").text("Aplicativo para festival de Restaurantes"),
                Z("div")
            ),
        )
    }
}