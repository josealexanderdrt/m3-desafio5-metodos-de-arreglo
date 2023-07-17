const listaDeTareas = document.querySelector("#tareas")
 const tareaInput = document.querySelector("#nuevaTarea")
 const btnAgregar = document.querySelector("#agregarTarea")

 const cuentaTareas=document.querySelector("#cuenta-tareas");

 const tareas=[]
 btnAgregar.addEventListener("click",()=>{
 const tarea = tareaInput.value
 tareas.push(tarea)
 tareaInput.value=""
 let html = ""
 for(let tarea of tareas){
    html+=`<li>${tarea} <button> eliminar </button>  </li>`;
 }
 listaDeTareas.innerHTML = html;
 
 cuentaTareas.textContent = `Total de tareas: ${tareas.length}`;
 })
