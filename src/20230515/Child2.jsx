function Child2(props) {

    console.log(props.name2a);

    return (
        <div>
            <h4>동생</h4>
            <h4>제수씨</h4>
            <h4>조카</h4>
            <h4>멍멍이 {props.name2a}</h4>
        </div>
    )
}

export default Child2;