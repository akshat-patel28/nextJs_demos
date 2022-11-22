import axios from "axios";

export default function Comment({ comment }) {
  return (
    <div>
      <h1>name:{comment.name}</h1>
      <h3>email:{comment.email}</h3>
      <p>Body:{comment.body}</p>
    </div>
  );
}

// getStaticPath dose noto needed in getServerSideProps
export async function getServerSideProps(context) {
  const { params } = context;
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
