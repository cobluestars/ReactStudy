import { useState } from "react"

function Hooks2() {
    const [time, setTime] = useState(1);

    const increaseTime = () => {
             (time === 12) ?
            setTime(1)
            :
            setTime(time+1)
    } 

    return (
        <div>
            <h2>useState 두번째 공부</h2>
            <h4 style={{color: "royalblue"}}>{time}시</h4>
            <button onClick={increaseTime} className="btn btn-success">
                증가시키기
            </button>
        </div>
    )
}

export default Hooks2