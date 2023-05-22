import { useRef } from "react";

function UseRef() { //특정 DOM(Document object model) 요소에 접근
    const inputRef = useRef("");

    const handleRef = () => {
        console.log(inputRef.current);
        console.log(inputRef.current.value);
        //inputRef.current.focus()
    }

    return (
        <div className="container mt-3 text-center">
            <h1>UseRef 공부</h1>
            <div className="d-flex justify-context-between">
                <div className="flex-fill">
                    <input 
                        ref={inputRef}
                        type="text"
                        className="form-control"
                        placeholder="입력"
                    />
                </div>
                <button
                    onClick={handleRef}
                    className="btn btn-primary ms-3">입력</button>
            </div>
        </div>
    );
}

export default UseRef;