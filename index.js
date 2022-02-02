document.querySelector("#btn").onclick = function() {
    const titulo = $("#titulo");
    const descricao = $("#descricao");
    const imagem = $("#imagem");
    const iframe = $("#iframe");
    const autor = $("#autor");
    const footer = $("footer");
    const h1 = $("h1");
    const header = $(".header");
    const info = $(".info");

    var input = document.querySelector("input").value;

    $.ajax({
    url:`https://api.nasa.gov/planetary/apod?api_key=OcZL1me94KWDsvoTYSDGj8Wkigga6YIjftaGpTbP&date=${input}`,
    success: function(response){
        
        titulo.text(response.title);
        descricao.text(response.explanation);
        if(response.copyright !== undefined){
            autor.text(response.copyright);
        }else{
            autor.text(`Autor desconhecido`);
        }

        if(response.media_type == "image"){
            imagem.attr("src",response.url);
            document.getElementById("iframe").style.display = "none";
            document.getElementById("imagem").style.display = "block";
        }else{
            iframe.attr("src", response.url);
            document.getElementById("imagem").style.display = "none";
            document.getElementById("iframe").style.display = "block";
        }
        return response;
    },

    error: function(){
        titulo.text(`ERROR:Insira uma data de 16/06/1995 até a data de hoje ou não carregou por um erro na API, RECARREGUE A PÁGINA PARA TENTAR NOVAMENTE`);
        titulo.css("border", "dashed","3px");
        titulo.css("color", "red");
        imagem.css("borderColor", "red")
        footer.css("color", "red");
        h1.css("color", "red");
        info.css("color", "red");
        info.css("borderColor", "red");
        header.css("borderColor", "red");
        titulo.css("padding", "23px");
        imagem.attr("src", "./img/error404.jpg");
        imagem.css("width", "700px");
        imagem.css("display", "block");
        iframe.css("display", "none");
        descricao.css("display", "none");
        autor.css("display", "none");
    },
})
} 