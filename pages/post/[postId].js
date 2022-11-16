import axios from "axios";
import { useRouter } from "next/router";

export default function Post({ post }) {
  // if fallback is true in getStaticPaths function
  // will get fallback version of page for undefined parameter
  // page will replaced with new render page after undefined parameter's  data is fetched
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}

// this function will informs posible values for any parmas getStaticProps function
export async function getStaticPaths() {
  // can write all params staticly
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: true,
  };

  // or
  // const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  // const data = res.data;
  // const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));
  // return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  // need to find way to use notFound with axios
  const data = await res.json();
  if (!data.id) {
    // this will render 404 page if id is wrong
    return {
      notFound: true,
    };
  }

  return { props: { post: data } };
}
