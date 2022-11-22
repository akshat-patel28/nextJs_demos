import axios from "axios";
import Link from "next/link";
import Comment from "../../components/comment/comment";

export default function CommentList({ comments }) {
  return (
    <>
      <Link href="/">Go Back</Link>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} id={comment.id} name={comment.name} />
        ))}
      </ul>
    </>
  );
}

// this function will fetch data on each page request
export async function getServerSideProps() {
  const res = axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res);
  const data = (await res).data;
  return {
    props: {
      comments: data,
    },
  };
}
