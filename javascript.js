/*
const $card = document.querySelector(".card")

console.log($card.classList)

$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-135","opacity-80","sepia")
$card.classList.remove("rotate-45")

const $lorem = document.getElementById("que-es")



const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");

$img.setAttribute("src","https://placeimg.com/200/200/animals")
$img.setAttribute("alt","Animals")
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)


const estaciones = ["Verano","Otoño","Invierno","Primavera"],
   $ul = document.createElement("ul")
document.write(`<h3>Estaciones del año</h3>`)
document.body.appendChild($ul)

  estaciones.forEach(el=>{
      const $li = document.createElement("li")
      $li.textContent = el
      $ul.appendChild($li)
  })


  const continentes = ["America","Europa","Asia","Oceania"],
   $ul2 = document.createElement("ul")
document.write(`<h3>Continentes del mundo</h3>`)
document.body.appendChild($ul2)


continentes.forEach((el)=> ( $ul2.innerHTML += `<li>${el}</li>`))


//MANERA CORRECTA DE HACERLO
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],



  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();



meses.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});


document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

*/

/*
const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment()
  cardContent=[
      {
          title:"Tecnologia",
          img:"https://placeimg.com/200/200/tech"
      },
      {
        title:"Animales",
        img:"https://placeimg.com/200/200/animals"
      },
      {
        title:"Arquitectura",
        img:"https://placeimg.com/200/200/arch"
      },
      {
        title:"Personas",
        img:"https://placeimg.com/200/200/people"
      },
      {
        title:"Naturaleza",
        img:"https://placeimg.com/200/200/nature"
      },

  ]

  cardContent.forEach(el=>{
      $template.querySelector("img").setAttribute("src",el.img)
      $template.querySelector("img").setAttribute("alt",el.title)
      $template.querySelector("figcaption").textContent=el.title

      let $clone = document.importNode($template,true)
      $fragment.appendChild($clone)
  })

  $cards.appendChild($fragment)

  */




  /*
  const $cards = document.querySelector(".cards"),
   $newCard = document.createElement("figure");

    $newCard.innerHTML =`
   <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
   `

   $newCard.classList.add("card")

   $cards.replaceChild($newCard,$cards.children[2],)

   */



   function saludar(nombre){
    alert(`hola ${nombre}`)
    console.log(event)
   }
   

   function holaMundo(){
     alert("Hola Ezequiel")
     console.log(event)
   }


const $eventoSemantico = document.getElementById("evento-semantico")

$eventoSemantico.onclick=holaMundo


const $eventoMultiple = document.getElementById("evento-multiple")

$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",(e)=>{
  alert("Hola Ezequiel 2")
  console.log(e)
})
$eventoMultiple.addEventListener("click",()=>{
  saludar("eze")
})

const $eventoRemovedor=document.getElementById("evento-remover")


const removerClick=(e)=>{
  alert(`removiendo elemento ${e.type}`)
  console.log(e)
  $eventoRemovedor.removeEventListener("click",removerClick)
  $eventoRemovedor.disabled = true
}

$eventoRemovedor.addEventListener("click",removerClick)

//flujo de eventos

/*
const $eventosFlujo=document.querySelectorAll(".eventos-flujo div")


const $linkDiv = document.querySelector(".eventos-flujo a")



$eventosFlujo.forEach(div=>{
  div.addEventListener("click",flujosEventos)
})

*/
/*
$linkDiv.addEventListener("click",(e) => {
 alert("Pulsa aceptar y se abrira una pestaña en guugle")
 e.stopPropagation()
})
*/


function flujosEventos(e){
  console.log(`Hola te saluda ${this.className},el saludo lo origino ${e.target.className}`)
  
}


document.addEventListener("click",(e)=>{
  console.log(`hiciste click en`, e.target)

  if(e.target.matches(".eventos-flujo div")){
    flujosEventos(e)
  }

  if(e.target.matches(".eventos-flujo a")){
  alert("Pulsa aceptar y se abrira una pestaña en guugle")
  e.preventDefault()
  }

})


const $abrir=document.getElementById("abrir-ventana")
const $cerrar=document.getElementById("cerrar-ventana")
const $imprimir=document.getElementById("imprimir-ventana")

let ventana;

$abrir.addEventListener("click",(e)=>{
  ventana = open("https://www.google.com.ar/")
})

$cerrar.addEventListener("click",(e)=>{
 ventana.close()
})

$imprimir.addEventListener("click",(e)=>{
  print()
})
