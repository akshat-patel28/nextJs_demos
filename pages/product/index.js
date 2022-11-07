import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <Link href="/">Home</Link>
      <h2>
        <Link href="/product/1" replace>
          Product 1
        </Link>
        {/* replace prop will replace current histry state to base url on back button(if browser back button is used) click */}
      </h2>
      <h2>
        <Link href="/product/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/product/3">Product 3</Link>
      </h2>
    </>
  );
}
