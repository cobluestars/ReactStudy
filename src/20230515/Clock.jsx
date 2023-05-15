import { useState } from "react";

function Clock() {
    const [realTime, setRealtime] = useState("");
            {/*변수    변수값 바꾸는 역할 */}
    setInterval(() => {
        setRealtime(new Date().toLocaleString());
    }, 1000);  {/*1초에 한번씩 Rendering*/}

    return (
        <div className="text-center">
            <h1 className="text-primary">현재 시간</h1>
            <h2 className="text-info"><b>{realTime}</b></h2>
        </div>
    )
}

export default Clock;