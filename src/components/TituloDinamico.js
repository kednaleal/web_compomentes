class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //primeiro cria a base do compomente 

        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("title");

        //segundo estilizar 

        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `
        // envia para a shadow

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
    
}


customElements.define("título-dinamico", TituloDinamico);
