// old code 
/* function TodoService1() {
    this.todos = [];
}
// do some work you need prototype function
TodoService1.prototype.getAll = function() {
    return this.todos;
}
TodoService1.prototype.addTodo = function(todo) {
    this.todos.splice(0,0, todo);
    return todo;
}

TodoService1.prototype.deleteTodo = function(index) {
    this.todos.splice(index, 1)
}
 */
// 1. you dont know the data model 
// 2. few function are not returning you know if the client is expecting 
// 3. you dont have anything private every thing is public 
// 4. no compiler assistance / ahead of time 
var TodoState1;
(function (TodoState1) {
    TodoState1[TodoState1["NEW"] = 0] = "NEW";
    TodoState1[TodoState1["ACTIVE"] = 1] = "ACTIVE";
    TodoState1[TodoState1["ALL"] = 2] = "ALL";
    TodoState1[TodoState1["COMPLETED"] = 3] = "COMPLETED";
})(TodoState1 || (TodoState1 = {}));
class TodoService1 {
    // version 2 
    constructor(todos) {
        this.todos = todos;
        this.dummy = 100;
        this.todos = todos;
    }
    add(todo) {
        this.todos.unshift(todo);
        return todo;
    }
    delete(index) {
        console.log("Deleting @ index : ", index);
        this.display(this.todos[index]);
        this.todos = this.todos.splice(index, 1);
    }
    getAll() {
        return this.todos;
    }
    getById(index) {
        return this.todos[index];
    }
    display(todo) {
        console.log("NAME:", todo.name, ", COMPLETED: ", todo.completed);
    }
}
// we never used private variables  
// now private variables are allowed 
// and the member function of the class can only 
// access the variable 
// version 1 
// private todos : Todo1 []; 
// constructor(todos : Todo1 []) {
//     this.todos  = todos; 
// }
TodoService1.todoId = 0;
let myTodos = new TodoService1([]);
console.log(`All Todos : ${myTodos.getAll()}`);
let todo1 = {
    name: "Get Vaccinated",
    state: TodoState1.ACTIVE,
    completed: false
};
let todo2 = {
    name: "Get Mask",
    state: TodoState1.ACTIVE,
    completed: false
};
// adding todo 
myTodos.add(todo1);
myTodos.add(todo2);
// displaying all todo 
console.log("------------------- Display all --------------------");
myTodos.getAll().forEach(t => console.log("Name:", t.name, ", Completed: ", t.completed));
console.log(myTodos.getAll().length);
// deleting todo 
myTodos.delete(1);
// displaying all todo 
console.log("------------------- Display all --------------------");
myTodos.getAll().forEach(t => console.log("Name:", t.name, ", Completed: ", t.completed));
console.log(myTodos.getAll().length);
myTodos.getAll().forEach(t => myTodos.display(t));
// working with static 
console.log("Static value is ", TodoService1.todoId);
// this will not work 
// console.log("printing dummy value  " , TodoService1.dummy); 
let todoser1 = new TodoService1([]);
console.log("todoser1 -> dummy value is : ", todoser1.dummy);
// console.log("Access static value with instance var : ", todoser1.todoId);
let todoser2 = new TodoService1([]);
console.log("todoser2 -> dummy value is : ", todoser2.dummy);
