import './todo-list.scss';

import { useStore } from '../../store';
import TodoListItem from '../todo-list-item';

const TodoList = () => {
    const store = useStore();
    
    return (
        <ul class="list">
            {store.todos.map((todo) => {
                return <TodoListItem {...todo} key={todo.id} />
            })}
        </ul>
    );
};

export default TodoList;