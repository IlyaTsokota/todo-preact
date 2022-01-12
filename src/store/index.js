import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import getRandomId from '../utils/get-random-id';

const TodoContext = createContext();

const createTodoItem = (text) => ({
    id: getRandomId(),
    text,
    isCompleted: false, 
});

class TodoStore {
    constructor() {
        const [todos, setTodos] = useState([]);

        this.todos = todos;
        this.setTodos = setTodos;
    }

    addTodo(text) {
        this.setTodos((prevState) => (
            [
                ...prevState,
                createTodoItem(text),
            ]
        ));
    }

    toggleCompletedTodo(id) {
        this.setTodos((prevState) => prevState.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : todo));
    }

    removeTodo(id) {
        this.setTodos((prevState) => {
            return prevState.filter((todoItem) => todoItem.id !== id);
        });
    }

    removeAllTodos() {
        this.setTodos([]);
    }
}

export function Store(props) {
    const store = new TodoStore();

    return (
        <TodoContext.Provider value={store}>
            {props.children}
        </TodoContext.Provider>
    );
}

export function useStore() {
    return useContext(TodoContext);
}
