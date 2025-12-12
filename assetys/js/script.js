function enviarwhat(event) {
    event.preventDefault()
    const nome= document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = "5561920029219";

    const text = `Olá! Me Chamo ${nome}, ${mensagem}`;

    const mensformatada = encodeURIComponent(text);

    const url = `https://wa.me/${telefone}?text=${mensformatada}`;
                 

    window.open(url, "_blank");
    
    console.log(url)

}


