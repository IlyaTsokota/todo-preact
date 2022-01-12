import './add-form.scss';

import { useStore } from '../../store';
import { useState } from 'preact/hooks';

const AddForm = () => {
    const store = useStore();
    const [text, setText] = useState('');

    const onInput = (e) => {
        setText(e.target.value.trim()); 
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (text.length > 0) {
            store.addTodo(text);
            setText('');
        }
    };

    return (
        <div class="add-form">
            <form onSubmit={onSubmit}>
                <input type="text" onInput={onInput} value={text} placeholder="Write text..." />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddForm;