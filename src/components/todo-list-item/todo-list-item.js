import './todo-list-item.scss';

import { useStore } from '../../store';

const TodoListItem = ({ id, text, isCompleted }) => {
    const store = useStore();
    
    return (
        <li class="todo-list-item">
            <span class="text" style={{ color: isCompleted ? 'green' : ''}}>{text}</span>
            <span class="done" onClick={() => store.toggleCompletedTodo(id)}>{isCompleted ? 'Start' : 'Done'}</span>
            <span class="remove" onClick={() => store.removeTodo(id)}>Remove</span>
        </li>
    );
};

export default TodoListItem;