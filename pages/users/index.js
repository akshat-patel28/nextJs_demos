import axios from "axios";
import User from "../../components/user/user";

// users will be populated at build time by getStaticProps()
export default function UserList({ users }) {
  return (
    <>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}

// getStateProps function will run on server-side
// can do direct database queries.
export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;

  // function must return a object with
  return { props: { users: data } };
}
