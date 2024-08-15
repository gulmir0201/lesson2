const tasks = [
    {
        id: 1,
        title: "task1",
        status: "In progress",
    },
];

const addTaskBtn = document.querySelector('.add-task-btn');
    const taskTable = document.getElementById('taskTable').querySelector('tbody');
    let taskCount = 1; 

    addTaskBtn.addEventListener('click', function() {
        taskCount++;
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${taskCount}</td>
            <td>New Task</td>
            <td>New status</td>
            <td><button>Edit</button></td>
            <td><button>Remove</button></td>
        `;
        taskTable.appendChild(newRow);
    });