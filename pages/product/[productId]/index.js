import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  console.log(router);
  return <h1>Product details {productId}</h1>;
}
