import style from "./app.scss";

import { Store } from "../../store";
import AddForm from "../add-form";
import TodoList from "../todo-list";

const App = () => {
    return (
        <div class={style.page}>
            <Store>
                <div class="todo">
                    <AddForm />
                    <TodoList />
                </div>
            </Store>
        </div>
    );
};

export default App;
