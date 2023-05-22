import { useCallback, useEffect, useState } from "react";

function UseCallback() {
    const [number, setNumber] = useState(0);
    
    const someFunction = useCallback(() => {
        console.log(`someFunction Number: ${number}`)
    }, [number]);

    useEffect(() => {
        console.log("someFunction이 변경되었습니다.");
    }, [someFunction]);

    // if (name === 바보) {
    //     useEffect(() => {
    //         console.log("someFunction이 변경되었습니다.");
    //     }, [someFunction]);
    
    // } 이렇게 쓸 수 없어

    // useEffect(() => {
    //  if() { console.log("someFunction이 변경되었습니다."); }
    // }, [someFunction]);

    // 이런 식으로 사용하기

    return (
        <div className="text-center mt-3">
            <h1>UseCallback Study</h1>
            <input
                onChange={(event) => setNumber(event.target.value)}
                value={number} 
                type="number" 
            />
            <button
                onClick={() => {someFunction()}}
                className="ms-3">someFunction 실행</button>
        </div>
    )
}

export default UseCallback;