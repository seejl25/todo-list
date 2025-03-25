export const myTasks = []

class AllTasks {
    constructor(project, name, descript, due, priority) {
        this.project = project;
        this.name = name;
        this.descript = descript;
        this.due = due;
        this.priority = priority;
    }

    info() {
        return `${this.project},${this.name},${this.descript},${this.due},${this.priority}`
    }
}

function addTasksToArr() {
    const projectName = localStorage.getItem("Project Name");
    const taskName = localStorage.getItem("Task Name");
    const taskDesc = localStorage.getItem("Task Description");
    const dueDate = localStorage.getItem("Due Date");
    const priority = localStorage.getItem("Priority");
    let newTask = new AllTasks(projectName, taskName, taskDesc, dueDate, priority);
    myTasks.push(newTask.info())
    console.log(myTasks)
}

export {addTasksToArr}