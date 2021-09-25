const ropas = [
  {
    id: 1,
    name: "buzo deportivo la seleccion",
    img:"../assets/imagenes-productos-H/buzo-cinco.jpeg" 
  },
  {
    id: 2,
    name: "buzo brazos militares",
    img:"../assets/imagenes-productos-H/buzo-tres.jpeg" 
  },
  {
    id: 3,
    name:"conjunto deportivo negro",
    img:"../assets/imagenes-productos-H/conjunto-cuatro.jpeg" 
  },
  {
    id: 4,
    name: "pantalon cargo crema",
    img:"../assets/imagenes-productos-H/pantalon-seis.jpeg" 
  },
  {
    id: 5,
    name: "remera con estampa",
    img:"../assets/imagenes-productos-H/remera-cuatro.jpeg" 
  },
  {
    id: 6,
    name: "remera estampa pato lucas",
    img:"../assets/imagenes-productos-H/remera-uno.jpeg" 
  },
  {
    id: 7,
    name: "remera lisa blanca",
    img:"../assets/imagenes-productos-H/remera-dos.jpeg" 
  },
  {
    id: 8,
    name: "remera advisory",
    img:"../assets/imagenes-productos-H/remera-siete.jpeg" 
  },
  {
    id: 9,
    name: "campera negra",
    img:"../assets/imagenes-productos-H/buzo-ocho.jpeg" 
  },
  {
    id: 10,
    name: "campera hentaimob",
    img:"../assets/imagenes-productos-H/buzo-trece.jpeg" 
  },
  {
    id: 11,
    name: "buzo bad batch",
    img:"../assets/imagenes-productos-H/buzo-diez.jpeg" 
  },
  {
    id: 12,
    name: "buzo negro jordan",
    img:"../assets/imagenes-productos-H/buzo-doce.jpeg" 
  },

]
//const estrella = document.querySelector(".estrella");

let ropasFavoritas = []; 
const contenedorRopa = document.querySelector(".container-ropa");
//const mostrarRopas = document.querySelector(".container-ropa")

document.addEventListener('DOMContentLoaded',() => {
    
    mostrarRopas();
})

function mostrarRopas(){
     
    contenedorRopa.innerHTML += `
     <section class="container-ropa" data-aos="fade-right">
        <div class="row">
            <div class="col-lg-4 col-xs-12">
            <button onclick="agregarAFavorito(ropas[0].id)">Agregar a favoritos</button>
               <div class="zoom" id="ropas[0].id">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px" onclick="encender()"ondblclick="apagar()">
                <img class="imgRopa" src="../assets/imagenes-productos-H/buzo-cinco.jpeg" alt="buzo-cinco" width="350px" height="350px">
               <div class="textoFoto"> Buzo deportivo</div>
               <div class="textoFoto">la secleccion</div>
               </div><br>
               <button onclick="agregarAFavorito(ropas[1].id)">Agregar a favoritos</button>
               <div class="zoom" id="ropas[1].id">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px" onclick="encender()"ondblclick="apagar()">
                <img class="imgRopa" src="../assets/imagenes-productos-H/buzo-tres.jpeg" alt="buzo-tres" width="350px" height="350px">
                <div class="textoFoto">buzo brazos militares</div>
               </div><br>
               <div class="zoom" id="ropas[2].id">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px" onclick="encender()"ondblclick="apagar()">
                <img  src="../assets/imagenes-productos-H/conjunto-cuatro.jpeg" alt="conjuto-cuatro" width="350px" height="350px">
                <div>conjunto deportivo negro</div>
               </div><br>
               <div class="zoom" id="4">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px"> 
               <img src="../assets/imagenes-productos-H/pantalon-seis.jpeg" alt="pantalon-seis" width="350px" height="350px">
               <div>pantalon cargo</div>
               <div>crema</div>
               </div>
            </div>
            <div class="col-lg-4 col-xs-12">
                <div class="zoom" id="0">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px">
                <img src="../assets/imagenes-productos-H/remera-cuatro.jpeg" alt="remera-cuatro" width="350px" height="350px">
                <div>remera con estampa</div>
                </div>
                <br>
                <div class="zoom">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px">
                <img src="../assets/imagenes-productos-H/remera-uno.jpeg" alt="remera-uno" width="350px" height="350px">
                <div>remera estampa</div>
                <div>pato lucas</div>
                </div><br>
                <div class="zoom"><img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px">
                <img src="../assets/imagenes-productos-H/remera-dos.jpeg" alt="remera-dos" width="350px" height="350px">
                <div>remera lisa blanca</div>
                </div><br>
                <div class="zoom">
                <img  class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px">
                <img  src="../assets/imagenes-productos-H/remera-siete.jpeg" alt="remera-siete" width="350px" height="350px">
                <div>remera advisory</div>
                </div><br>  
            </div>
            <div class="col-lg-4 col-xs-12">
                <div class="zoom">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px">    
                <img src="../assets/imagenes-productos-H/buzo-ocho.jpeg" alt="buzo-ocho" width="350px" height="370px">
                <div>campera negra</div>
                </div><br>
                <div class="zoom">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px">    
                <img  src="../assets/imagenes-productos-H/buzo-trece.jpeg" alt="buzo-trece" width="350px" height="350px">
                <div>campera hentaimob</div>
                </div><br>
                <div class="zoom">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px">
                <img src="../assets/imagenes-productos-H/buzo-diez.jpeg" alt="buzo-diez" width="350px" height="350px">
                <div>buzo bad batch</div>
                </div><br>
                <div class="zoom">
                <img class="estrella" src="../assets/img/estrella-off.png" alt="estrella-off" width="45px" height="45px"> 
                <img src="../assets/imagenes-productos-H/buzo-doce.jpeg" alt="buzo-doce" width="350px" height="350px">
                <div>buzo negro jordan</div>
                </div>
                <br>
                </br>
                
            </div>
        </div>  
    </section>
    <br></br>
    `
    //contenedorRopa.appendChild()
    
   
}

function agregarAFavorito(id){
const ropaFavorita = ropas.find(ropa => {
    return ropa.id === id;
})
  ropasFavoritas.push(ropaFavorita)
  const filterArray = ropasFavoritas.filter(function(ele , pos){
    return ropasFavoritas.indexOf(ele) == pos;
}) 
  console.log(filterArray)
  
}
/*function encender(){
    document.querySelector("img").src ="../assets/img/estrella-on.png";
}
function apagar(){
    document.querySelector("img").src ="../assets/img/estrella-off.png";
}*/