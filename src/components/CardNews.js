class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");
        
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || " anônimos");

        const link = document.createElement("a");
        link.textContent  = this.getAttribute("title");
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsContent);

        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage =  document.createElement("img");
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style(){}
}

customElements.define("card-news", CardNews);