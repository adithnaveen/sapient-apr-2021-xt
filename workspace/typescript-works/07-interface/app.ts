// define data model and show working of interface 

interface Todo {
    name:string, 
    completed?:boolean, 
    state: TodoState
}

enum TodoState {NEW, ACTIVE, ALL, COMPLETED}

interface ITodoService {
    add(todo:Todo) : Todo; 
    delete(todo:Todo) : void; 
    getAll() : Todo []; 
    getById(index: number) : Todo; 
}

// state -> All, Completed, Active, Deleted 
let todo : Todo ={
    name:"Buy Groceries",
    completed :true, 
    state : TodoState.ACTIVE
}

class TodoService implements ITodoService {
    add(todo:Todo) : Todo { return null; }
    delete(todo:Todo) : void{} 
    getAll() : Todo [] {return null;}
    getById(index: number) : Todo {return null;}
}