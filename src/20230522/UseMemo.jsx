import { useState } from "react";
import UseMemoChild from "./UseMemoChild";

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="container text-center mt-3">
                <h1>UseMemo Study</h1>
                <button onClick={() => setNumber((prev) => prev + 1)}>증가</button>
                <input 
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                    className="ms-2"
                    type="text"
                    placeholder="입력" />
            </div>
            <hr />
            <UseMemoChild number={number} text={text}/>
        </div>
    );

}

export default UseMemo;