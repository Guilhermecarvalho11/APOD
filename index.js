document.querySelector("#btn").onclick = function() {

    var input = document.querySelector("input").value;

    $.ajax({
    url:`https://api.nasa.gov/planetary/apod?api_key=OcZL1me94KWDsvoTYSDGj8Wkigga6YIjftaGpTbP&date=${input}`,
    success: function(response){
        const titulo = $("#titulo");
        const descricao = $("#descricao");
        const imagem = $("#imagem");
        const iframe = $("#iframe");
        const autor = $("#autor");

        
        $("#titulo").text(response.title);
        $("#data").text(response.data);
        $("#descricao").text(response.explanation);
        if(response.copyright !== undefined){
            $("#autor").text(response.copyright);
        }else{
            $("#autor").text(`Autor desconhecido`);
        }

        if(response.media_type == "image"){
            imagem.attr("src",response.url);
            document.getElementById("iframe").style.display = "none";
            document.getElementById("imagem").style.display = "block";
        }else{
            iframe.attr("src", response.url);
            document.getElementById("imagem").style.display = "block";
            document.getElementById("iframe").style.display = "none";
        }
        return response;
    }})



    
   
} 