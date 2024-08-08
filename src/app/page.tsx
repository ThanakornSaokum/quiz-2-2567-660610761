import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "../components/PostOwnner";
import Comment from "../components/Comment";
import { comments } from "@/libs/comments";


export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner fullname = "Thanakorn Saokum" student_id = "660610761"/>

        {/* Comment Example */}
        {comments.map(comment => {
          return <Comment {...comment} key={comment.username} />
        })}

        {/* Reply Example */}
        {/* map-loop render Comment component here */}
        
      </div>
    </div>
  );
}
