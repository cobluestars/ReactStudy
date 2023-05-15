import Comment from "./Comment";

function CommentList() {
    
    const nowDate = new Date().toLocaleString();
    const sampleDate = [
        {
            name: "김민우",
            Comment: "리엑트 헷갈림",
            date: nowDate
        },
        {
            name: "김민우",
            Comment: "리엑트 헷갈림",
            date: nowDate
        },
        {
            name: "김민우",
            Comment: "리엑트 헷갈림",
            date: nowDate
        },
        {
            name: "김민우",
            Comment: "리엑트 헷갈림",
            date: nowDate
        },
        {
            name: "김민우",
            Comment: "리엑트 헷갈림11",
            date: nowDate
        },
    ];

    return(
        <div> {/*한 개 이상일 때는 항상 div로 감싼다. */}
            {/*<Comment name={"김민우"}
                     comment={"랄랄라"}
                     date={date}
            />
            <Comment name={"김민우"}
                     comment={"리엑트는 어렵지 않습니다. 굉장히 헷갈릴 뿐이에요."}
                     date={date}
            />
            <Comment name={"김민우"}
                     comment={"자바왕 풀스텍킹"}
                     date={date}
            />
            <Comment name={"김민우"}
                     comment={"연봉 30억"}
                     date={date}
            />
            <Comment name={"김민우"}
                     comment={"▲노잼"}
                     date={date}
    />*/}


    {/*반복문 이용해서 comment 컴포넌트 출력*/}
    {/*map함수 굉장히 중요. react에서 자주 쓰인다.*/}
            {sampleDate.map((loop, index) => (
                <Comment
                    key={index}
                    name={loop.name}
                    comment={loop.Comment}
                    date={loop.date}
                /> //★componant도 반복이 가능하다.★
            ))}
            {/*자바스크립트  {}로 감싸기 */}
        </div>
    )
}

export default CommentList;

