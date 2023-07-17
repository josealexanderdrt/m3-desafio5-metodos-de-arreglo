const escriboTareaInput = document.querySelector("#escriboTarea")
const agregoTareaBtn = document.querySelector("#agregoTarea")
const totalTareasContador = document.querySelector("#totalTareas")
const totalRealizadasContador = document.querySelector("#totalRealizadas")
const listadoDeTareas = document.querySelector("#listaDeTareas")


function cambiarEstado(index){

    tareas[index].completado=!tareas[index].completado; // cambiar propiedad de completado en la lista de tareas para luego recorrerla y contar todos los completados
    refrescarContadorRealizadas()
  
}

function refrescarContadorRealizadas(){

    let contador = 0; // declara contador inicial = 0
    tareas.forEach( (tarea)=>{  // recorro lista de tareas
        if(tarea.completado){   // si es completado aumento mi contador en 1
            contador= contador+1;
        }
    }
    )   

    totalRealizadasContador.innerHTML=contador; // renderizo el contador
}

function refrescarContadorTotal(){
    totalTareasContador.innerHTML=tareas.length;
}


function eliminar (index) {
    tareas.splice((index),1);
    renderTareas(tareas)
    refrescarContadorRealizadas()
    refrescarContadorTotal()

}


const tareas =[{id:1, nombre:"tarea1", completado:false},
{id:2, nombre:"tarea2", completado:false},
{id:3, nombre:"tarea3", completado:false}]

agregoTareaBtn.addEventListener("click", () => {

    const nuevaTarea = escriboTareaInput.value

    if(nuevaTarea.length===0){
        alert('Ingrese una tarea');
        return false;
    }

    const ids = tareas.map(object => {  // ids tendra una lista con todos los ids que estén en la lista tareas
        return object.id;
      });

      console.log(ids);

      let nuevoId;
      if(ids.length===0){
        nuevoId=1
      }
      else{
        nuevoId=Math.max(...ids) +1 //Math.max retornará el id mayor de la lista y le sumo 1 para obtener el próximo ID a usar y no se repitan.
      }

 
 tareas.push( {id : nuevoId, nombre: nuevaTarea, completado:false}) 
 escriboTareaInput.value=""
refrescarContadorTotal();
 renderTareas(tareas); 

})




 function renderTareas (tareas){
    listadoDeTareas.innerHTML="";
    tareas.forEach((tarea,index)=>{
    listadoDeTareas.innerHTML += `
    <tr>
    <td>${tarea.id}</td>
    <td>${tarea.nombre}</td>
    <td><input type="checkbox" onclick="cambiarEstado(${index})"  value="${tarea.completado}"></td>
    <td> <button id="eliminar"  onclick="eliminar(${index})" > eliminar </button> </td>
    </tr>`;
    });
    }
    renderTareas(tareas);
