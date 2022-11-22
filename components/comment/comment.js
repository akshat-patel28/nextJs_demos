import Link from "next/link";

export default function Comment({ id, name }) {
  return (
    <Link href={`/comments/${id}`}>
      <li>{name}</li>
    </Link>
  );
}
