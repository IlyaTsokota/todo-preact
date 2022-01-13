import style from './todo-list-item.scss';

import { useStore } from '../../store';

const TodoListItem = ({ id, text, isCompleted }) => {
    const store = useStore();
    
    return (
        <li class={style["todo-list-item"]}>
            <span class={style["text"]} style={{ textDecoration: isCompleted ? 'line-through' : ''}}>{text}</span>
            <input type="checkbox" checked={isCompleted} onChange={() => store.toggleCompletedTodo(id)} />
            <span class={style["remove"]} onClick={() => store.removeTodo(id)}>Remove</span>
        </li>
    );
};

export default TodoListItem;