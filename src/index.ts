type heroi={
    name: string;
    vulgo: string;
};

function printObjetos(pessoa: heroi){
    console.log(pessoa)
}

printObjetos({
    name: "Bruce",
    vulgo: "batman"
})
console.log("olá mundo");