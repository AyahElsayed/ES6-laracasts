class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach((task, index) => {
            console.log(task, index)
        });
    }
    // if single argument or line i can remove ()
    // this.tasks.forEach(task => console.log(task));


    prepare(){
        this.tasks.forEach(task => {
            console.log(this);
        })
    }
}

class Task {
    toGulp(){
        console.log('converting to gulp')
    }
 }

new TaskCollection([
    new Task, new Task, new Task
]).prepare()
// if i dont use arrow function the console will be undefined