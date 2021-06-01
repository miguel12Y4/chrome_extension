//por hacer -> ejecutar accion al cargar el DOM
// obtener video de la pagina actual de youtube
// dejar variable a cargada en la memoria



window.onload = ()=> {
    document.onkeypress = tecla;
    console.log("estoy vivo")
}

function tecla(ev){
    let code = ev.keyCode;
    // 44 = ,
    // 45 = -
    // 46 = .

    if(code==44 || code==45 || code==46){
        let video = document.querySelector('video');
        if(video==null) {
            console.log("no hay video")
            return
        } 
        let time=video.currentTime-2;

        jsonData = {
            "title" : document.querySelector('title').text,
            "url" : window.location.href,
            "time" : time
        }
        const options = {
            "method": "POST",
            "mode": "no-cors",
            "headers": {
              "Content-Type": "application/json"
            },
            "body": JSON.stringify(jsonData)
        };
        console.log(jsonData)
        
        fetch("http://localhost:8000/", options)
        .then(response => response.text())
        .then(data => {
            console.log(data)
        });
        
    }
}




