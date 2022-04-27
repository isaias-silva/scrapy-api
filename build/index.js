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
//libs
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const frases_1 = __importDefault(require("./frases"));
//variavéis
const server = (0, express_1.default)();
const port = process.env.PORT || 8080;
//funcionalidades
server.use((0, express_session_1.default)({ secret: 'adkaskfaokfoasksdaff', resave: true, saveUninitialized: true }));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //quem pode acessar a api
    res.header('Acess-Control-Allow-Headers', 'Origin,X-Requrested-With ,Content-Type, Accept,Autorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATH,DELETE,GET'); //CRUD
        return res.status(200).send({}); //resposta
    }
    next();
});
server.get('/frases/:frase', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let frases = yield (0, frases_1.default)(req.params.frase);
    res.send(frases);
}));
server.listen(port, () => { console.log(`server on in port ${port}`); });
