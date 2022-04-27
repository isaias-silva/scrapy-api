"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
function pensador(tema) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://www.pensador.com/${tema}/`;
        const browser = yield puppeteer_1.default.launch({ headless: true });
        const page = yield browser.newPage();
        try {
            yield page.goto(url);
        }
        catch (_a) {
            console.log('erro recarregando....');
            page.reload();
        }
        const resultado = yield page.evaluate(() => {
            const dados = [];
            for (let i = 0; i < (document.querySelectorAll('.frase.fr')).length; i++) {
                dados.push((`࿇${document.querySelectorAll('.frase.fr')[i].textContent}࿇`));
            }
            return (dados);
        });
        return resultado;
    });
}
exports.default = pensador;
