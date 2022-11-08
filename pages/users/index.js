import axios from "axios";

// users will be populated at build time by getStaticProps()
export default function UserList({ users }) {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
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
