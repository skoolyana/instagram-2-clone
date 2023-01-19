import React, { useEffect, useState } from "react";

import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

function Post({ id, username, userImg, img, caption }) {
  
  const { data: session } = useSession();

  

  const { comments: setComments } = useState([]);


  const { comment: setComment } = useState()

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {}
    );
  }, [db]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;

    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    
    <div className="bg-white my- border rounded-sm ">
      {/*Header */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt=""
        ></img>
        <p className="flex-1 font-bold"> {username} </p>
        <DotsHorizontalIcon className="h-5"></DotsHorizontalIcon>
      </div>

      {/*img */}

      <img className="object-cover w-full" src={img}></img>

      {/*Buttons */}

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn"></HeartIcon>
            <ChatIcon className="btn"></ChatIcon>
            <PaperAirplaneIcon className="btn"></PaperAirplaneIcon>
          </div>

          <BookmarkIcon className="btn"></BookmarkIcon>
        </div>
      )}

      {/*Captions */}

 
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username} </span>
          {caption}
        </p>
 
      {/*Comments */}

      {/*Input Box */}

      { session && (
        <form className="flex items-center p-4 ">
          <EmojiHappyIcon className="h-7"></EmojiHappyIcon>

          <input
            type="text"
            value= {comment}
            placeholder="Add a Comment..."
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 
    focus:ring-0 outline-none"
           
          ></input>
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
