/* for displaying TASKS */
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
    updateTaskStorage(myTasks)
}

function updateTaskStorage(taskArr) {
    for (let i = 0; i < taskArr.length; i++) {
        localStorage.setItem(`Task ${i}`, taskArr.at(i))
    }
}

export {addTasksToArr}

/* for displaying PROJECTS */
export const myProjects = [];

class AllProjs{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    info() {
        return `${this.name},${this.color}`;
    }
}

function addProjToArr() {
    const projList = localStorage.getItem("project list");
    const projName = projList.split(",").at(0);
    const projColor = projList.split(",").at(1);
    let newProj = new AllProjs(projName, projColor);
    myProjects.push(newProj.info())
    console.log(myProjects)
    updateProjStorage(myProjects)
}

function updateProjStorage(projArr) {
    for (let i = 0; i < projArr.length; i++) {
        localStorage.setItem(`Project ${i}`, projArr.at(i))
    }
}

export {addProjToArr}