import Warning from "./Warning";

function Input({ value, onChange, onAdd }) {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                name="value"
            />
            <button onClick={onAdd} disabled={value.length < 3}>
                Add
            </button>
            {value.length > 0 && value.length < 3 && <Warning />}
        </div>
    );
}

export default Input;
