
/* 
METODO PUSH
se utiliza para agregar elementos en un arreglo en donde el argumento que asignemos correspondera al nuevo dato almacenado al final del arreglo ejemplo: 


const arreglo1 = [1,2,3,4,5]
 arreglo1.push('hola')
 console.log(arreglo1)

 podemos ver que arreglo1 fue modificado aunque fue declarado con const. esto se debe a que cuando el valor de la variablees es un objeto o arreglo, los elementos o propiedades de estos pueden ser modificados, pero la variable en si misma no puede ser reasignada 
 
 METODO UNSHIFT

 podemos agregar elementos al principo de un arreglo con .unshift



const arreglo2 = [1,2,3,4,5]
arreglo2.unshift('hola')

El metodo splice

el metodo splice es muy flexible sirve para añadir, remover y remplazar elementos en un arreglo. para añadir elementos utilizaremos la sintaxis arreglo.splice(index, 0, valor) donde index es la posición donde añadiremos el dato, 0 indica que no borraremos dato y valor es lo que agregaremo al arreglo 

const arreglo3 = [1,2,3,4,5]
arreglo3.splice(2, 0,'hola')


parra borrar un elemento en cualquier posición utilizaremos los siguientes argumentos arreglo.splice(index, 1) donde 1 indica que se borrará solo 1 elemento 
 
const arreglo6 = [1,2,3,4,5]
 arreglo6.splice (2,1)


  finalmente para remplazar un elemento utilizaremos la sintaxis arreglo.splice(index, 1, valor) en donde 1 nos indica que ese valor se eliminará y luego se insertá el valor indicado 

  const arreglo7 = [1,2,3,4,,5]
arreglo7.splice(2, 1, 'hola')

actividad 1 de la guía agregando elementos con push 

 

let superHeroes = ["ironman", "superman", "Hawkeye"]

superHeroes.push('Robin')
superHeroes.unshift('batman')
superHeroes.splice(2, 0, 'MitadMan')

ELIMINANDO ELEMENTOS DE UN ARREGLO 

hay tres formas frecuentes de eleiminar un arreglo:

El metodo Shif
con este metodo podemos borrar el primer elemento de un arreglo 
const arreglo4 = [1,2,3,4,5]
arreglo4.shift()


MOTODO POP

con este metodo podemos borrar el ultimo elemento de un arreglo
const arreglo5 = [1,2,3,4,5]
arreglo5.pop() 


METODO SPLICE 

como ya mencionamos anteriormente, con splice podemos borrar un elemento en cualquier posición si lo utilizamos con los siguientes argumentos arreglo.splice(index, 1)

Actividad 2 Agregando y borrando elementos 




const usuarios = ["erick", "cristian", "max", "leo"]
usuarios.pop()
usuarios.unshift('Maria Jose')
usuarios.splice(2, 1)


MEMBRESIA 

hablamos de membresia cuando queremos determinar si un elemento pertenece a un arreglo o no. Para verificar esto ocupamos el método .includes()

const usuarios = [ "erick", "cristian", "max", "claudia"];
usuarios.includes()

usualmente se ocupan en conjunto con un if para realizar acciones bsasadas en la membresia del elemento 


const usuarios = [ "erick", "cristian", "max", "claudia"];
if (usuarios.includes("erick")){
  console.log("hola Erick");

  
CONTAR ELEMENTOS

podemos contar elementos de un grado con arreglo.length

const usuarios = [ "erick", "cristian", "max", "claudia"];
console.log(usuarios.length) 

BUSCANDO EL INDICE DE UN ELEMENTO 

EL METODO FINDINDEX

en algunos casos, es posible que no conozcamos el indice del  elemento que queremos eliminar o modificar. Por ejemplo, si deamos eliminar a un usuario por su nombre (y otro atributo), necesitamos buscar en el arreglo su indice correspondiente y luego con esa información podremos borrarlo 

para buscar el indice de un elemento  utilizaremos.findIndex

arreglo.findIndex((elemento) => elemento === Valor)


por ejemplo, dado el siguiente arreglo de apellidos:
const apellidos = ["aniston", "cox", "buffay", "Perry", "leBlanc", "duarte"]

se necesita saber cual es el índice del apellido Perry, entonces podemos hacer lo siguiente:

const apellidos = ["Aniston", "Cox", "Buffay", "Perry", "LeBlanc", "duarte"]

const indiceDePerry = apellidos.findIndex( apellido => apellido === "Perry")
console.log(indiceDePerry);

si todavia te cuesta escribir arrow functions puedes escribir la funcion asi 

const apellidos = ["Aniston", "Cox", "Buffay", "Perry", "LeBlanc", "duarte"]

const otraFormaDeBuscar = apellidos.findIndex(function(apellido){
  return apellido === "Perry"
}
)

console.log(otraFormaDeBuscar)


EL METODO FINDINDEX EN UN ARREGLO CON OBJETOS

por ejemplo, dado el siguiente arreglo de objetos:

let actores = [
  { id: 431, nombre: "Jhonny Depp"},
  { id: 121, nombre: "Brad Pitt"},
  { id: 541, nombre: "leonardo DiCaprio"},
  { id: 664, nombre: "Morgan Freeman"}
];

const indiceDelActorAEliminar = actores.findIndex( actor => actor.id === 541)

actores.splice(indiceDelActorAEliminar, 1)


console.log(actores)

ACTIVIDAD 3 ENCONTRANDO Y ELIMINANDO UNA PELICULA 

realicemos el siguiente ejercicio en donde debamos eliminar la pelicula "terminator" del siguiente arreglo

let peliculas = [
  { id: 1, nombre: "Thor"},
  { id: 2, nombre: "Ant-Man"},
  { id: 3, nombre: "Terminator"},
  { id: 4, nombre: "IpMan"},
  { id: 5, nombre: "Rocky" },
];

const indiceTerminator = peliculas.findIndex( pelicula => pelicula.id === 3)

peliculas.splice(indiceTerminator, 1)


console.log(peliculas)

ITERANDO ARREGLOS

.forEach es otra forma de iterear un arreglo 

const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"]

estaciones.forEach(x => console.log(x)) 

//con arrow funtions 


const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"]


estaciones.forEach(function (x){
  console.log(x);})

// con funcion anonima 

el anterior ejemplo se lee como: por cada elemento del arreglo de estaciones, se realizará un console.log de ese elemento 

.forEach recibe una funcion como argumento y aplica esa funcion a cada elemento del arreglo. esa Funcion puede ser algo sencillo como un  console.log o volver a modificar el DOM


body = document.querySelector("body")
const valores = [200, 100, 500, 300, 250]
valores.forEach(x => body.innerHTML += `<p> ${2* x} </p>`)

// esto se lee como: por cada valor, agrega al html un parrafo mostrando el doble del valor 

// IMPORTANTE  dentro de los template literales (cadenas de textos definidas entre comillas invertidas) además de interpolar variavlespodemos hacer calculos o ejecutar codigos js, como por ejemplo `<p> ${2* x} </p>`



TRANSFORMANDO ARREGLOS 

el metodo .map nos permite generar un nuevo arreglo a partir de la aplicación de una funcion a cada elemento del arreglo inicial 

const valores = [200, 100, 500, 300, 250]

const  nuevo_valores = valores.map(x => 2* x)
console.log(nuevo_valores) // [400, 200, 1000, 600, 500]

el mètodo .mao no modifica el arrelgo original, sino que genera uno nuevo a partir de este 

¿cuando usar .forEach y cuando usar .map?

el metodo. forEach resulta útil cuando queremos realizar una accion inmediata con cada elemento iterado, como mostaralo en la pantalla o agregarlo al HTML.

En cambio, el método .map se utiliza cuando queremos transformar los datos para seguir trabajando con ellos 

FILTRANDO ELEMENTOS DE UN ARREGLO 

con el método .filter podemos filtrar los elementos de un areglo a partir de una condición 

const valores = [200, 100, 500, 300, 250]

const valores_filtrados = valores.filter(x => x >= 300)
console.log(valores_filtrados)

también  podemos ocupar filter con un arreglo de objetos. Por ejemplo 

const estudiantes = [
  { nombre: "Juan", nota: 3.4},
  { nombre: "Laura", nota: 6},
  { nombre: "Katherine", nota: 4.3},
  { nombre: "jhonathan", nota: 5.4}
];

const estudiantesAprobados = estudiantes.filter( estudiante => estudiante.nota >= 4.5)
console.table(estudiantesAprobados)

ACTIVIDAD 4: FILTRAR Y CONTAR 

let trabajadores = [
  {nombre: "Contanza", cargo: "Chef"},
  {nombre: "Luis", cargo: "garzón"},
  {nombre: "Estefany", cargo: "Administradora"},
  {nombre: "Andrés", cargo: "Recepcionista"},
  {nombre: "Pedro", cargo: "garzón"},
  {nombre: "Felipe", cargo: "Aseo"},
  {nombre: "Maria", cargo: "garzón"},
  {nombre: "Diego", cargo: "garzón"},
  ]

const trabajadoresGarzones = trabajadores.filter( trabajador => trabajador.cargo === "garzón")
console.log(trabajadoresGarzones.length)

UNIR ARREGLOS 

con el metodo .concat podemos unir los elementos de dos arreglos  en un nuevo  arreglo 

const arr1 = [1,2,3]
const arr2 = [ 4,5,6]
const arr3 = arr1.concat(arr2)
console.log(arr3)
si hacemos console.log(arr1) o console.log(arr2) veremos que los arreglos no fueron modificados, sòlo se generò un arreglo nuevo con la uniòn de los elementos, los cuales fueron almacenados en arr3 

también podemos unir arreglos de objetos:

const autosCompactos = [
  {marca: 'Toyoya', modelo: 'Corolla', combustible: 'Gasolina'},
  {marca: 'Mazda', modelo: '3', combustible: ' Gasolina'},
  {marca:'Honda',modelo:'Civic',combustible:'Gasolina'},
 {marca:'Bmw',modelo:'116d',combustible:'Diesel'},
] 

const autosDeportivos=[
  {marca:'Opel',modelo:'AstraOPC',combustible:'Gasolina'},
  {marca:'Renault',modelo:'MeganeRS',combustible:'Gasolina'},
  {marca:'Mitsubishi',modelo:'LancerEvo',combustible:'Gasolina'},
  ];

  const autos = autosCompactos.concat(autosDeportivos);
  console.log(autos)


ORDENAR ELEMENTOS 

podemos ordenar los elementos de un arreglo con el método .sort

const arr1 =[4,1,2,3];
const ordenado = arr1.sort()
console.log(ordenado)

El mètodo sort ordena predeterminadamente de forma ascendente , pero también puede recibir una función que permite comparar 2 elementos del arreglo, en base a ese resultado ordenar los elementos. Por ejemplo:

const arr1 =[4,1,2,3];
const ordenado = arr1.sort( (x,y) => y - x)
console.log(ordenado)

En el ejemplo anterior, se comparan x e y restando y menos x. 

si el result es menor a 0 significa que x es mayor 

si el resultado es 0, ambos elementos son iguales 

y si el resultado es mayor a 0 significa que Y es mayor.

en esta caso en particular la primera comparaciòn sería 1 menos 4 lo que da como resultado -3, esto significa que x, es decir 4 es mayor, por lo que se coloca primero qie 1 en el ordenamiento resultante

en otras calabras, utilizando una función de comparación  personalizada en el método sort nos permite controlar el criterío de ordenamiento según nuestras necesidades 

const estudiantes = [
  { nombre: "Juan", nota: 3.4 },
  { nombre: "Laura", nota: 6 },
  { nombre: "Katherine", nota: 4.3 },
  { nombre: "Jonathan", nota: 5.4 }
  ];
  const estudiantesOrdenado = estudiantes.sort((x,y) => y.nota - x.nota)
  console.table(estudiantesOrdenado)


  ARREGLOS Y DOM 

  CREANDO UNA INTERFAZ PARA INSERTAR ELEMENTOS 

  ahora crearemos apps donde agregaremos y borraremos elementos de una pagina web  utilizando como base arreglos 
  para esto, realizaremos un ejercicio paso a paso en donde agregaremos nuevos invitados para una reunión 

  const listaDeInvitados = document.querySelector("#invitados")
const invitadoInput = document.querySelector("#nuevoInvitado")
const btnAgregar = document.querySelector("agregarInvitado")


3) lo siguiente sera crear un arreglo para guardar la informaciòn de los invitados y agregar interaccón al botón para que, al ser presionado, tome el valor del input y lo agregue como un nuevo elemento al arreglo 


const listaDeInvitados = document.querySelector("#invitados")
const invitadoInput = document.querySelector("#nuevoInvitado")
const btnAgregar = document.querySelector("agregarInvitado")

const invitados = []
btnAgregar.addEventListener("click", () => {
  const nuevoInvitado = invitadoInput.value;
  invitados.push(nuevoInvitado);
  invitadoInput.value = ""
})

4. agregar el nombre del invitado no es suficiente. luego de agregarlo debemos actualizar la lista de nombres a la página web. para esto tenemos que:

- vaciar ek contenido de la lista actual
- recorrer el arreglo de invitados 
- en cada iteraciòn , ocupar el innerHTML para agregar el invitado a la lista 

5. la funcion quedaría entonces de la siguiente manera:


*/


const listaDeInvitados = document.querySelector("#invitados")
const invitadoInput = document.querySelector("#nuevoInvitado")
const btnAgregar = document.querySelector("agregarInvitado")

const invitados = []
btnAgregar.addEventListener("click", () => {
  const nuevoInvitado = invitadoInput.value;
  invitados.push(nuevoInvitado);
  invitadoInput.value = ""

  let html = ""
  for (let invitado of invitados ){
    html += `<li>${invitado}</li>`;
  }

  listaDeInvitados.innerHTML = html
  })








//
 

 /* const btnAgregar = document.querySelector("#agregarInvitado");
const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const invitados = [];



   btnAgregar.addEventListener("click", () => {
    const nuevoInvitado = invitadoInput.value;
    invitados.push(nuevoInvitado);
    invitadoInput.value = "";


    let listado = "";
    for (const invitado of invitados ){
        listado += `<li>${invitado}</li>`;
    }

    listaDeInvitados.innerHTML = listado;
 }) */
