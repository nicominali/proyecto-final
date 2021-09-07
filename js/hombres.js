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
const estrella = document.querySelector(".estrella");

const contenedorRopa = document.querySelector(".container-ropa")

document.addEventListener('DOMContentLoaded',() => {
    
    mostrarRopas();
})

function mostrarRopas(){
    ropas.forEach((ropa) => {
        
        const div = document.querySelector(".zoom");
        const favorito = document.querySelector(".estrella");
        const img = document.querySelector(".imgRopa") 
        const texto = document.querySelector(".textoFoto")       
        
        favorito.onclick = () =>{
            agregarAFavorito(ropas.id);
        }

        /*div.appendChild(".estrella");
        div.appendChild(".imgRopa");
        div.appendChild(".textoFoto");*/


        //console.log(ropa.img);
    })
}
function agregarAFavorito(id){
    const ropaFavorita = ropas.find (ropa => {
        return ropa.id === id
    })
}
console.log(ropaFavorita);
function encender(){
    document.querySelector("img").src ="../assets/img/estrella-on.png";
}
function apagar(){
    document.querySelector("img").src ="../assets/img/estrella-off.png";
}