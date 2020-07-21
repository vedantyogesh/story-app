import React from 'react'
import moment from 'moment';

function Notifications(props) {
    const { notifications } = props;
    console.log(notifications);
    return (
        <div className="section">
            <div className="card z-depth-2">
                <div className="card-content">
                    <div className="card-title">
                        Notifications
                    </div>
                    <ul className="notifications">
                        { notifications && notifications.map(notif => {
                            return (
                                <li key={notif.id}>
                                    <span className="pink-text">{notif.user} </span>
                                    <span>{notif.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(notif.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Notifications
