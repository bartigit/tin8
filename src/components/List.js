import { useState } from "react";
import ListElement from "./ListElement";
import Input from "./Input";

function List() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [counter, setCounter] = useState(1);

    const addItem = () => {
        const newItem = {
            id: counter,
            value: inputValue,
        };
        setItems([...items, newItem]);
        setInputValue("");
        setCounter(counter + 1);
    };

    const removeItem = (idToRemove) => {
        const updatedItems = items.filter((item) => item.id !== idToRemove);
        setItems(updatedItems);
    };

    return (
        <div>
            <Input value={inputValue} onChange={setInputValue} onAdd={addItem} />
            <ul>
                {items.map(({ id, value }) => (
                    <ListElement
                        key={id}
                        id={id}
                        value={value}
                        onRemove={removeItem}
                    />
                ))}
            </ul>
        </div>
    );
}

export default List;
