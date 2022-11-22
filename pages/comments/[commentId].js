import axios from "axios";
import Link from "next/link";

export default function Comment({ comment }) {
  return (
    <>
      <Link href="/comments">Go Back</Link>
      <div>
        <h1>name:{comment.name}</h1>
        <h3>email:{comment.email}</h3>
        <p>Body:{comment.body}</p>
      </div>
    </>
  );
}

// getStaticPath dose noto needed in getServerSideProps
export async function getServerSideProps(context) {
  const { params, req, res: response, query } = context;
  // set and read cookies using req and res from context
  console.log(req.headers.cookie); // get cookies
  response.setHeader("Set-Cookie", ["name=user"]); // set cookies
  console.log(query); // query parmas from URL
  const res = axios
    .get(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
    .then((res) => res);
  const data = (await res).data;
  return {
    props: {
      comment: data,
    },
  };
}
