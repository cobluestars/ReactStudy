import { useState } from "react";

function Networking() {
    const [data, setData] = useState(null);

    function getURL() {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setData(json));
        // .catch((error) => {
        //     console.log("에러");
        // }); //에러를 잡아낸다. 
    }

    getURL();

    return (
        <div className="ms-3 mt-3">
            <h4>결과</h4>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>               //(문자열로, 연·행갈이, 들여쓰기)
    );
}

export default Networking;