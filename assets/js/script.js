let myTasks = [
    {id: 1, name: 'Tidy up my Room', completed: false},
    {id: 2, name: 'Conquer the World', completed: false},
    {id: 3, name: 'Buy some Bread', completed: false},
];

const addInput = document.getElementById('newInput') // ready - input to add tasks
const tasksList = document.querySelector('.tasksList') // ready - add template list of tasks
const addButton = document.getElementById('buttn') // ready - button to add tasks
const totalTasks = document.getElementById('total') // ready - total number of tasks added
const doneTasks = document.querySelector('.done') // ready - total number of tasks done

// Add Task

const addTask = () => {
    const taskInput = addInput.value 
    if(!taskInput){
        alert('Please, you have to write the task before')
        return; // this is for not excecuting the other part of the code
    }

    const lastTask = myTasks[myTasks.length-1]
    const newInput = {
        id: lastTask? lastTask.id + 1 : 1, // +1 increase the id by one
        name: taskInput,
        completed: false,
    };

    myTasks.push(newInput);
    renderTasks(); 
};

addButton.addEventListener('click', addTask) // call the addTask function


// Status Change

const modifyStatus = (id) => {
    const taskIndex = myTasks.findIndex((task) => task.id === id);
    
    if (myTasks[taskIndex].completed === false) { // check the status of the task in the moment
      myTasks[taskIndex].completed = true; // change the status to true
    } else {
      myTasks[taskIndex].completed = false; // change the status to false
    }
  
    renderTasks();
  };
  

// DELETE

eraseTask = (id) => {
    const taskIndex = myTasks.findIndex((task) => task.id === id);
    myTasks.splice(taskIndex, 1);
    renderTasks(); 
};


const renderTasks = () => { // render the tasks in the Dom 
    let html = '';
    let doneQty = 0;
    myTasks.forEach((task) => {
      const checkbox = task.completed
        ? `<input type="checkbox" checked onclick="modifyStatus(${task.id})"/>`
        : `<input type="checkbox" onclick="modifyStatus(${task.id})"/>`;
  
      html += `
        <tr>
          <td>${task.id}</td>
          <td>
            <label>${checkbox} ${task.name}</label>
          </td>
          <td>
            <button onclick="eraseTask(${task.id})">Delete</button>
          </td>
        </tr>
      `;
  
      if (task.completed) { 
        doneQty += 1;
      }
    });
  
    tasksList.innerHTML = html;
    totalTasks.textContent = myTasks.length;
    doneTasks.textContent = doneQty;
  };
  

renderTasks();



