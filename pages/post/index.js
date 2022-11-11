import axios from "axios";
import Post from "../../components/post/post";

export default function PostList({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} />
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  return { props: { posts: data } };
}
