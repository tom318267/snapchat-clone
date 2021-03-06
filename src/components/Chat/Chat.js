import { Avatar } from "@material-ui/core";
import React from "react";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import ReactTimeago from "react-timeago";
import "./Chat.scss";
import { useDispatch } from "react-redux";
import { selectImage } from "../../features/appSlice";
import { db } from "../../firebase";
import { useHistory } from "react-router-dom";

const Chat = ({ id, profilePic, username, timestamp, imageUrl, read }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
      history.push("/chats/view");
    }
  };

  return (
    <div onClick={open} className="Chat">
      <Avatar src={profilePic} className="chat-avatar" />
      <div className="chat-info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to view -"}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>

      {!read && <StopRoundedIcon className="chat-readIcon" />}
    </div>
  );
};

export default Chat;
