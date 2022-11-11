import axios from "axios";

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

// this function will informs posible values for any parmas getStaticProps function
export async function getStaticPaths() {
  // can write all params staticly
  //   return {
  //     paths: [
  //       {
  //         params: { postId: "1" },
  //       },
  //       {
  //         params: { postId: "2" },
  //       },
  //       {
  //         params: { postId: "3" },
  //       },
  //     ],
  //     fallback: false,
  //   };

  // or
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  const data = res.data;
  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = res.data;

  return { props: { post: data } };
}
