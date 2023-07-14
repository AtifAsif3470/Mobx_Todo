import { types } from 'mobx-state-tree';

const Todo = types
    .model('Todo', {
        title: types.string,
    })

const TodosStoretypes = types
    .model('TodoStore', {
        todos: types.array(Todo),
    })
    .actions(self => ({
        addTodo(title) {
            const newTodo = Todo.create({
                title,
            });
            self.todos.push(newTodo);
        },
        removeTodo(todo) {
            self.todos.remove(todo);
        },
        editTodo(inPut, data) {
            const ind = self.todos.indexOf(data)
            self.todos[ind] = { title: inPut }
        }
    }));

const todoStore = TodosStoretypes.create({
    todos: [],
});
export default todoStore;