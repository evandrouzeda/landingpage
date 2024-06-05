import Z, { ZeyoAs } from "zeyo";
import LayoutContainerSection from "../../../../componentes/layoutContainer/section";
import App from "../../../../app";
import style from "./style.module.css"
import ToggleSwitch from "../../../../componentes/toggleSwitch";
import CarrosselVerticalButton from "../../../../componentes/carrosselVerticalButton";

export default class Portifolio extends LayoutContainerSection {
    actived = false
    lastscroll = 0
    direction = false

    constructor(app: App) {
        super()
        this.class(style.portifolio, this.layout.fullWidth).children(
            Z("h2").text("Já implementou").class(this.layout.free),
            Z("div").class(style.container).children(
                Z("div").class(style.primeiro, style.verde, style.left).children(
                    Z("b").text("Landing Page"),
                    new CarrosselVerticalButton(
                        Z("div").class(style.cardonly).children(
                            Z("p").text("1").object(o => o.element.style.background = "#232e14"),
                            Z("p").text("2").object(o => o.element.style.background = "lightskyblue"),
                            Z("p").text("3").object(o => o.element.style.background = "#ff766d"),
                        )
                    ).class(style.breakout)
                ),
                Z("div").class(style.segundo, style.amarelo, style.top).object(o => {
                    o.children(
                        Z("b").text("Aplicativo para automação residencial"),
                        Z("div").class(style.card, style.automacao).children(
                            Z("h2").text("Luz da Sala"),
                            new ToggleSwitch(app).checked().onChange(() => {
                                o.element.classList.toggle(style.cinza)
                            })
                        )
                    )
                }),
                Z("div").class(style.terceiro, style.azul, style.bottom).children(
                    Z("b").text("Skill Alexa para integrar via Lambda com a Plataforma de automação residencial"),
                    Z("div").class(style.card)
                ),
                Z("div").class(style.quarto, style.vermelho, style.right).children(
                    Z("b").text("Aplicativo para festival de Restaurantes"),
                    Z("div").class(style.card)
                ),
            ).object(async (o) => {
                window.addEventListener("scroll", () => {
                    o.element.getBoundingClientRect()
                    const goingUP = this.lastscroll > window.scrollY
                    const start = window.innerHeight + window.scrollY >= o.element.offsetTop - 50
                    const finish = window.innerHeight + window.scrollY <= o.element.offsetTop + 50
                    if (((start && finish) && !this.actived) || this.lastscroll === 0 && !goingUP) {
                        this.actived = true;
                        Array(o.element.children.length).fill("").forEach(async (v, i) => {
                            await this.sleep(100 * i)
                            o.element.children[i].classList.toggle(style.show)
                        });
                        //o.element.classList.toggle(style.show)
                        console.log("Entrou", this.actived)
                    } else if (goingUP !== this.direction) this.actived = false
                    this.lastscroll = window.scrollY
                    this.direction = goingUP
                })
            })
        )
    }

    sleep(time: number) {
        return new Promise(res => {
            setTimeout(() => {
                res(true)
            }, time);
        })
    }
}