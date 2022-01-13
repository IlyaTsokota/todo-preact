import style from "./add-form.scss";

import { useStore } from "../../store";
import { useState } from "preact/hooks";

const AddForm = () => {
    const store = useStore();
    const [text, setText] = useState("");

    const onInput = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const trimText = text.trim();

        if (trimText.length > 0) {
            store.addTodo(trimText);
            setText("");
        }
    };

    console.log(style);
    return (
        <div class={style["add-form"]}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    onInput={onInput}
                    value={text}
                    placeholder="Write text..."
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddForm;
