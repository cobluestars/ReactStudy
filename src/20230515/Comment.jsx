/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
    dateText: {
        color: "black",
        fontSize: 16,
        display: "inline-block"
    },
};

function Comment({name, comment, date, children}) { //비구조화 문법; 방법2

    //const { name, comment, date } = props; //비구조화 문법; 방법1

    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{name}</span>
                <span style={styles.commentText}>{comment}</span>
                <span style={styles.dateText}>{date}</span>     {/*비구조화 문법; 앞에 props를 생략함.*/}
                {children}
              </div>

            {/*<div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
                <span style={styles.dateText}>{props.date}</span>
              </div>*/}
        </div>
    );
}

export default Comment;