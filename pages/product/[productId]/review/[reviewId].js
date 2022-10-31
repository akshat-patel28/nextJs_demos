import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  const reviewId = router.query.reviewId;
  console.log(router);
  return <h1>Product Review {reviewId}</h1>;
}
