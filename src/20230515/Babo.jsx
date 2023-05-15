import {Link} from "react-router-dom";

function Babo() {

    return (
        <div>
            <h1>왜 눌러</h1>
            바보 아니면 아래 버튼을 눌러라<br />
            <Link to="/">돌아가기</Link> 
            {/*링크는 페이지 이동을 시키기 때문에 어디에서든지 사용 가능*/}
        </div>
    )
}

export default Babo;