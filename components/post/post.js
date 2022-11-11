import Link from "next/link";

export default function Post({ title, id }) {
  return (
    <li>
      <Link href={`/post/${id}`}>{title}</Link>
    </li>
  );
}
