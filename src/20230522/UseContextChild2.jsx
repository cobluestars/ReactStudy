import { useContext } from "react";
import { initialContext } from "./UseContext";

function UseContextChild2() {

const { name, age } = useContext(initialContext);

    return (
        <h5 className="text-center fw-bold">
            저의 이름은 {name} 입니다.
            저의 나이는 {age} 입니다.
        </h5>
    );
}

export default UseContextChild2;