import React, { useState } from "react";
import { notificationData } from "./NotificationData";

export const NotificationCard = () => {
  const [notification, setNotification] = useState(notificationData);


  function markAllToRead (){
    setNotification((arr) => arr.map((n)=> ({...n, isUnread: false})
    ))
    }

function clickedCard (id){
  setNotification((arr) => arr.map( n => (
    n.id === id ? {...n, isUnread: false} : n
  )))

  
}
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="status">
            <h2>Notification</h2>
            <span className="count">
              {notification.filter((n) => n.isUnread).length}
            </span>
          </div>
          <button id="markAll"className="markAll" onClick={markAllToRead}>Mark all as read</button>
        </div>

        {notification &&
          notification.map(
            ({
              id,
              name,
              image,
              text,
              actionLink,
              actImg,
              time,
              isUnread,
              content,
            }) => (
              <div key={id} className="card" onClick={()=>clickedCard(id)}>
                <div className="topContent">
                  <img src={image} alt="" />
                  <div className="info">
                    <div className="content">
                      <p>
                        <a href="#">{name}</a>

                        <span>
                          {" "}
                          {text} <a href="#"> {actionLink} </a>
                        </span>
                      </p>
                      
                      <p>{time}</p>
                    </div>
                    <div className="sideIndecator">
                    <p className={isUnread ? "isUnread":"isRead"}>*</p>
                    <br/><img src={actImg} alt="" />
                    </div>
                  </div>
                </div>
                {content && (<div className="message">{content}</div>)}
                
              </div>
            )
          )}
      </div>
    </div>
  );
};
