class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //primeiro cria a base do compomente 

        const compontRoot = document.createElement("h1");
        compontRoot.textContent = "Kedna";

        //segundo estilizar 

        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `
        // envia para a shadow

        shadow.appendChild(compontRoot);
        shadow.appendChild(style);
    }
    
}


customElements.define("título-dinamico", TituloDinamico);
