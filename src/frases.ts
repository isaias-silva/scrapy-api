import puppeteer from 'puppeteer'
export default async function pensador(tema:string) {
    
    
        const url = `https://www.pensador.com/${tema}/` //a
        const browser = await puppeteer.launch({headless:true});
    
        const page = await browser.newPage();
      
        try {
            await page.goto(url);
        } catch {
            console.log('erro recarregando....')
            page.reload()
        }
    
        const resultado = await page.evaluate(() => {
    
            const dados = [];
                
            for (let i = 0; i <(document.querySelectorAll('.frase.fr')).length; i++) {
                dados.push((`࿇${document.querySelectorAll('.frase.fr')[i].textContent}࿇`))
            }
    
            return (dados);
    
    
        })
   
    return resultado;
    }