import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [mulCount, setMulCount] = useState(1);

    function upCount() {
        setCount(count + 1);
    }

    function downCount() {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log("항상 렌더링 ●")
    })  //항상

    useEffect(() => {
        console.log("첫번째만 렌더링 ◆")
    }, [])  //의존성 배열: 콘솔창에 무조건 첫번째만 출력됨.

    useEffect(() => {
        console.log("증가 및 감소만 렌더링 ★")
    }, [count]) //count에 변화가 있으면 수행하라.

    useEffect(() => {
        console.log("곱셈만 렌더링 ▲")
    }, [mulCount]) //count에 변화가 있으면 수행하라.

    //UseEffect(() => {}): x, [], [value] 세 가지 종류가 있다.

    return (
        <div className="container mt-3 text-center">
            <h1>UseEffect 공부</h1>
            <button /*onClick={upCount}*/ onClick={() => setCount(count + 1)} className="btn btn-primary">증가</button>
            <button /*onClick={downCount}*/ onClick={() => setCount(count - 1)} className="btn btn-primary ms-3">감소</button>
            <button onClick={() => setMulCount(mulCount * 2)} className="btn btn-primary ms-3">곱셈</button>
            <h5>숫자: {count}</h5>
            <h5>곱셈: {mulCount}</h5>
        </div>
    );
}

export default UseEffect;