import React from "react";
import Notification from "./Notification";
import reservedNotifications from "./NotificationData";

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [], // 생성자에서는 비워져 있음
        };
    }

    componentDidMount() { // JavaScript setInterval를 이용하여 초마다 정해진 작업 수행
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ // State 업데이트를 위해 setState 함수를 이용함
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                })
                clearInterval(timer);
            }
        }, 5000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id}   // react 에서 map 함수를 사용할 때 필수적인 요소
                            id={notification.id}
                            message={notification.message}
                        />
                    )
                })}
            </div>
        )
    }
}

export default NotificationList;