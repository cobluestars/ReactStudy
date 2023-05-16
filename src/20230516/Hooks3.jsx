import { useState } from "react";

function Hooks3() { //onChange 이벤트
    const [inputText, setInputText] = useState("");
    const [nameList, setNameList] = useState([]);

    function handleText(event) {
        setInputText(event.target.value);
        //console.log(event.target.value);
        //console.log("handleText 함수가 동작하는가");
    }

    function onSubmit() {
        console.log("출석 버튼 눌림");
        //배열을 useState로 만들었을 때 값을 업데이트하기 위해서는
        //이전 값을 가져와서 spread연산자(...)로 풀어준 다음에 추가해서 새로운 배열로 만들어야...
        setNameList((prevValue) => {
            return [...prevValue, inputText];
        });
        setInputText("");
    }

    
    const handleKeyword = (event) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    }

    function cancel() {
        console.log("출석 취소");
        setNameList((prevValue) => {
          const updateList = [...prevValue];
          let n = prompt("몇 등으로 온 사람을 출석 취소하겠습니까?") - 1;
          updateList.splice(n, 1);
          return updateList;
        });
      }

    return (
    <div className="container text-center mt-3">
            <h2>useState 세번째 공부 (출석부)</h2>
            <label className="form-label" htmlFor="text">
                클래스 학생 이름 입력
            </label>
            <div className="d-flex justify-content-center">
                <div>
                    <input 
                        onChange={handleText}
                        className="form-control" 
                        type="text" 
                        id="text" 
                        placeholder="학생 이름 입력"
                        value={inputText}
                    />
                </div>
                <div>
                <button onClick={onSubmit} className="btn btn-primary">출석</button>
                <button onClick={cancel} className="btn btn-danger">취소</button>
                </div>
            </div>
            {nameList.map((loop, index) => {
                return (
                <div className="card mt-3" key={index}>
                    <div className="card-body">
                        <span className={ index < 3 ? "text-primary fw-bold" : "text-danger fw-bold"}>{index+1}등</span> : {loop}
                    </div>
                </div>
                )
            })}
    </div>
    );
}

export default Hooks3;