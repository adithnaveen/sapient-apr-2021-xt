// define data model and show working of interface 
var TodoState;
(function (TodoState) {
    TodoState[TodoState["NEW"] = 0] = "NEW";
    TodoState[TodoState["ACTIVE"] = 1] = "ACTIVE";
    TodoState[TodoState["ALL"] = 2] = "ALL";
    TodoState[TodoState["COMPLETED"] = 3] = "COMPLETED";
})(TodoState || (TodoState = {}));
// state -> All, Completed, Active, Deleted 
let todo = {
    name: "Buy Groceries",
    completed: true,
    state: TodoState.ACTIVE
};
class TodoService {
    add(todo) { return null; }
    delete(todo) { }
    getAll() { return null; }
    getById(index) { return null; }
}
