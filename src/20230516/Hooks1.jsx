import { useState } from "react";

function Hooks1() {
    console.log("렌더링 되었나");
    const [number, setNumber] = useState(10); //useState > 무조건 const로 선언
        //[변수명, 변수를 업데이트시키는 함수]
    function doubleNumber() {
        console.log("버튼 눌림"); //함수 안에는 진입
        setNumber(number * 2);
    }

    return (
        <div className="text-center mt-3">
            <h1>useState 첫번째 공부</h1>
            <h4>Count: {number}</h4>
            <button
                onClick={doubleNumber} 
                className="btn btn-primary">더블 숫자 증가</button>
        </div>
    )
}

// const Hooks1 = () => {
//     return (
//         <h1>Hooks1 컴포넌트 (화살표함수)</h1>
//     )
// }

export default Hooks1; //hooks > 갈고리 > 제어