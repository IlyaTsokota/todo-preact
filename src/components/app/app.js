import './app.scss';

import { Store } from '../../store';
import AddForm from '../add-form';
import TodoList from '../todo-list';

const App = () => {
    return (
        <Store>
            <div class="todo">
                <AddForm />
                <TodoList />
            </div>
        </Store>
    );
};

export default App;