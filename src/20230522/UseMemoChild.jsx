import { useMemo } from "react";

function UseMemoChild({ number, text }) {

    function getNumber(number) {
        console.log("숫자 변동 ♥")
        return number;
    }

    useMemo(() => {
        getNumber(number);
    }, [number]);

    function getText(text) {
        console.log("텍스트 변동 ●")
        return text;
    }

    useMemo(() => {
        getText(text);
    }, [text]);


        console.log("숫자 변동");
        console.log("텍스트 변동");

    return (
        <div className="text-center">
            <h5>결과</h5>
            <p>{number}</p>
            <p>{text}</p>
        </div>
    );
}

export default UseMemoChild;