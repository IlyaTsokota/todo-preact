import style from './todo-list.scss';

import { useStore } from '../../store';
import TodoListItem from '../todo-list-item';
import { Fragment } from 'preact';

const TodoList = () => {
    const store = useStore();

    if (!store.todos.length) {
        return <h1 class={style.empty}>List Empty!</h1>
    }

    return (
        <Fragment>
            <button class={style["remove-all"]} onClick={() => store.removeAllTodos()}>Remove All</button>
            <ul class={style["todo-list"]}>
                {store.todos.map((todo) => {
                    return <TodoListItem {...todo} key={todo.id} />
                })}
            </ul>
        </Fragment>
        
    );
};

export default TodoList;