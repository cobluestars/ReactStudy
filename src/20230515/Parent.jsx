import Child from "./Child"
import Child2 from "./Child2";

function Parent() {

    return (
        <div>
            <h1>나의 동물친구들과 내 동생 가족들을 소개합니다.</h1>
            <Child who={"나"} name={"김민우"} age={18}/>
            <Child who={"멍멍이"} name={"미소"} age={14}/>
            <Child who={"야옹이"} name={"코코"} age={1}/>
            <Child2 name2a={"밤비"}/>
        </div>
    )
}

export default Parent;