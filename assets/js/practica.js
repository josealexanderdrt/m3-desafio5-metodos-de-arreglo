let task = [
    { id: 1, name: "carne", comleted: false},
    { id: 2, name: "queso", comleted: false},
    { id: 3, name: "papas", comleted: false},
];

const addValue = document.querySelector(".addInput")
const taskList = document.querySelector(".tasks")
const addButton = document.querySelector("i")
const total = document.querySelector("total")
const done = document.querySelector("done")


// agrega la tarea 
const addTask = () => {
    const taskName = addValue
    if (!taskName){
        alert("agrega el producto")
        return; // esto es para que no se ejecute la otra parte del codigo 
    }

    const lastTask = task[task.length-1]
    const newTask = {
        id: lastTask? lastTask.id + 1 : 1, // +1 es incrementar el id 
        name: taskName,
        completed: false,


    };

    task.push(newTask);

    //rendertansk ()


}


addButton.addEventListener("click", addTask)


//cambio de estatus 

const changStatus =(id) => {
    const taskIndex = task.findIndex((task)=> task.id === id)
    if(task[taskIndex].completed == false)
    {const newObject ={
        id: task[taskIndex].id, //es para que el id no cambie y se mantenga el mismo 
        name: task[taskIndex].name, // aca tampoco quiero que cambie el nombre
        completed: true // 
      }
      task.splice(taskIndex, 1, newObject) // splice es para eliminar un elemento del array y agregar otro en su lugar  splice ( indice, cantidad de elementos a eliminar, elemento a agregar)

    }else{
        const newObject ={
            id: task[taskIndex].id, //es para que el id no cambie y se mantenga el mismo 
            name: task[taskIndex].name, // aca tampoco quiero que cambie el nombre
            completed: false // 
          }
          task.splice(taskIndex, 1, newObject)

    }

    console.log(task)
    //renderTasks()
}