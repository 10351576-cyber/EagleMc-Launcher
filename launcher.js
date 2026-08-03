const contenido = document.getElementById("contenido");
const tarjetas = document.getElementById("tarjetas");

let fondoGuardado = localStorage.getItem("fondo");
let imagenGuardada = localStorage.getItem("imagen");


let tipoGuardado = localStorage.getItem("tipoFondo");


if(tipoGuardado=="imagen" && imagenGuardada){

    document.body.style.background=
    "url('"+imagenGuardada+"') center/cover fixed";

}
else{


    if(fondoGuardado=="azul"){
        document.body.style.background=
        "linear-gradient(135deg,#080d18,#17244b)";
    }


    if(fondoGuardado=="oscuro"){
        document.body.style.background=
        "linear-gradient(135deg,#000,#222)";
    }


    if(fondoGuardado=="rojo"){
        document.body.style.background=
        "linear-gradient(135deg,#300,#900)";
    }


    if(fondoGuardado=="verde"){
        document.body.style.background=
        "linear-gradient(135deg,#032,#064)";
    }

}



// INICIO

function inicio(){

    tarjetas.style.display = "grid";

    contenido.innerHTML = `

    <h1>EAGLEMC LAUNCHER</h1>

    <p>Selecciona tu versión de Eaglercraft</p>


    <div class="version-area">

        <select id="version">

            <option value="eagle.mc.1.8.9.html">
            Minecraft 1.8.9
            </option>

            <option value="eagle.mc.1.12.2.html">
            Minecraft 1.12.2
            </option>

        </select>


        <button id="play">
        ▶ JUGAR
        </button>

    </div>

    `;


document.getElementById("play").onclick=function(){

    let version=document.getElementById("version").value;

    window.location.href=version;

};

}



// SERVIDORES

function servidores(){

    tarjetas.style.display="none";

    contenido.innerHTML=`

    <h1>Servidores</h1>

    <p>Copia la dirección del servidor.</p>


    <div class="card servidor">

        <div class="servidor-info">
            <h2>ArchMC</h2>
            <p>wss://arch.mc/</p>
        </div>

        <button class="copiar">
        📋 Copiar
        </button>

    </div>

    `;


    let botones = document.querySelectorAll(".copiar");


    botones.forEach(function(boton){

        boton.onclick=function(){

            let ip = this.parentElement.querySelector("p").innerText;

            navigator.clipboard.writeText(ip);

            this.innerText="Copiado ✓";


            setTimeout(()=>{

                this.innerText="📋 Copiar";

            },1500);

        };

    });


}



// NOTICIAS

function noticias(){

    tarjetas.style.display="none";

    contenido.innerHTML=`

    <h1>Noticias</h1>

    <p>Últimas noticias del launcher.</p>

    <div class="card">
        <h2>Actualización</h2>
        <p>El launcher está en desarrollo.</p>
    </div>

    `;

}



// AJUSTES

function ajustes(){

    tarjetas.style.display="none";

    contenido.innerHTML=`

    <h1>Ajustes</h1>

    <p>Personaliza tu launcher.</p>


    <div class="card ajuste-item">

        <div>
            <h2>Tipo de fondo</h2>
            <p>Elige color o imagen.</p>
        </div>

        <select id="tipo-fondo">

            <option value="color">
            Usar color
            </option>

            <option value="imagen">
            Usar imagen
            </option>

        </select>

    </div>



    <div class="card ajuste-item">

        <div>
            <h2>Color del fondo</h2>
            <p>Selecciona un color.</p>
        </div>

        <select id="fondo">

            <option value="azul">
            Azul clásico
            </option>

            <option value="oscuro">
            Oscuro
            </option>

            <option value="rojo">
            Rojo
            </option>

            <option value="verde">
            Verde
            </option>

        </select>

    </div>



    <div class="card imagen-ajuste">

        <div>
            <h2>Imagen personalizada</h2>
            <p>Selecciona una imagen.</p>
        </div>

        <input type="file" id="imagen" accept="image/*">

    </div>



    <button id="guardar-ajustes">
    Guardar cambios
    </button>


    `;



    document.getElementById("guardar-ajustes").onclick=function(){


        let tipo=document.getElementById("tipo-fondo").value;

        let fondo=document.getElementById("fondo").value;

        let archivo=document.getElementById("imagen").files[0];



        if(tipo=="color"){


            localStorage.removeItem("imagen");


            if(fondo=="azul"){

                document.body.style.background=
                "linear-gradient(135deg,#080d18,#17244b)";

            }


            if(fondo=="oscuro"){

                document.body.style.background=
                "linear-gradient(135deg,#000,#222)";

            }


            if(fondo=="rojo"){

                document.body.style.background=
                "linear-gradient(135deg,#300,#900)";

            }


            if(fondo=="verde"){

                document.body.style.background=
                "linear-gradient(135deg,#032,#064)";

            }

        }



        if(tipo=="imagen" && archivo){


            let lector=new FileReader();


            lector.onload=function(e){


                document.body.style.background=
                "url('"+e.target.result+"') center/cover fixed";


                localStorage.setItem("imagen",e.target.result);


            };


            lector.readAsDataURL(archivo);

        }



        localStorage.setItem("tipoFondo",tipo);

        localStorage.setItem("fondo",fondo);



        this.innerText="Guardado ✓";


        setTimeout(()=>{

            this.innerText="Guardar cambios";

        },1500);


    };


}



// CREDITOS

function creditos(){

    tarjetas.style.display="none";

    contenido.innerHTML=`

    <h1>Créditos</h1>

    <p>Personas que trabajan en el desarrollo</p>

    <div class="card">
        <h2>EagleMc Launcher</h2>
        <p>CHATGPT DO DO DO.</p>
    </div>

    `;

}




document.getElementById("inicio").onclick=inicio;

document.getElementById("servidores").onclick=servidores;

document.getElementById("noticias").onclick=noticias;

document.getElementById("ajustes").onclick=ajustes;

document.getElementById("creditos").onclick=creditos;

inicio();