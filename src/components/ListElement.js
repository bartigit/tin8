function ListElement(props) {
    return (
        <>
            <li>{props.id}. {props.value}</li>
            <button onClick={() => props.onRemove(props.id)}>Remove</button>
        </>
    );
}

export default ListElement;
