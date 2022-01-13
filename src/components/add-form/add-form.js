import style from "./add-form.scss";

import { useStore } from "../../store";
import { useState, useRef } from "preact/hooks";

const AddForm = () => {
    const store = useStore();
    const input = useRef();
    // const [text, setText] = useState("");
console.log(style);
    const onInput = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const trimText = input.current.value.trim();

        if (trimText.length > 0) {
            store.addTodo(trimText);
            // setText("");
            input.current.value = "";
        }
    };

    return (
        <div class={style["add-form"]}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    ref={input}
                    // onInput={onInput}
                    // value={text}
                    placeholder="Write text..."
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddForm;
