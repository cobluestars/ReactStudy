import nyancat from "./study.gif"
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap 가져오기 

function Study() {
    const name = "김민우"; //문자열
    const age = 18;
    // const earn = 300000000; //숫자
    // const hobby = ["코딩", "천체관측", "독서"]; //배열 > map > 반복(loop)
    // const body = {
    //     "height" : 175,
    //     "weight" : 60,
    //     "eyes" : "1.2(left), 1.2(right)"
    // }//object 형태, json
    const MyClassIntroduce = [
        { "name" : "신동진" },
        { "name" : "노유리" },
        { "name" : "김은현" },
        { "name" : "이주은" },
        { "name" : "최선경" },
        { "name" : "김도영" },
        { "name" : "김민우" },
        { "name" : "조인제" }
    ] //배열과 객체

    const h2Style = {
        color: "darkblue",
        textAlign: "center", //카멜표기법으로 표기
        fontSize: "25px", //카멜표기법으로 표기
        border: "1px solid red",
        backgroundColor: "royalblue"
    } //객체object

    return ( //js 영역
        <div>
            <h1 style={{textAlign: "center", color: "blue"}}>안녕하세요?</h1>
            <img src="/spacecat logo.png" className="spacecat-logo" alt="logo" style={{width: "100px", borderRadius: "100px"}} /> <br /> 
            <img src={nyancat} alt="nyancat" style={{width: "25%"}}/>
            <img src={nyancat} alt="nyancat" style={{width: "25%"}}/>
            <img src={nyancat} alt="nyancat" style={{width: "25%"}}/>
            <img src={nyancat} alt="nyancat" style={{width: "25%"}}/>

            <p style={h2Style}>저의 이름은 {name}입니다.</p> <br />
            <div className="d-flex justify-content-center">
            <p className="fw-bold text-info">저의 나이는 {age}살입니다. 저는 뻔뻔합니다</p> <br />
            </div>
            <p>우리반을 소개합니다.</p>
            {MyClassIntroduce.map((loop, index) => {
                return (      //key
                    MyClassIntroduce.length === index + 1 ?
                            <span key={index}>{loop.name} </span>:
                            <span key={index}>{loop.name}, </span> //삼항연산자
                                //고유한 값
                )
            })}

            {/* <p>저의 희망 연봉은 {earn}입니다.</p> <br />
            {hobby.map((loop, index) => {
                return <p>{index + 1}번째 취미: {loop}</p>
            })}
            <p>저의 키는{body.height}cm 입니다.</p>
            <p>저의 몸무게는{body.weight}kg 입니다.</p>
            <p>저의 시력은{body.eyes} 입니다.</p> */}

            <Accordion defaultActiveKey="0"> {/*컴포넌트 */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>자기 소개</Accordion.Header>
                    <Accordion.Body>
                    저는 김민우입니다.
                    </Accordion.Body>
                </Accordion.Item>
                <hr />
                <Accordion.Item eventKey="1">
                    <Accordion.Header>나의 능력</Accordion.Header>
                    <Accordion.Body>
                    저는 풀스택 자바왕이 될겁니다. 희망 연봉은 30억입니다.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <button type="button" className="btn btn-info">민초맛 버튼</button> {/*class 대신 className */}
            <button type="button" className="btn btn-info">치약맛 버튼</button>
            </div> //html 영역
         
    )
}

export default Study;

//node.js에서 module.export={};와 같은 역할
//그러나 jsx는 es6 문법 사용하므로 export를 사용해야 한다.