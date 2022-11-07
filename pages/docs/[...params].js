import { useRouter } from "next/router";
// this file will catch all routes after /docs
// if file name is [[...params]].js which is optional catch all routes
//    * this will render same file for /docs path
export default function Documents() {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params) {
    return (
      <>
        <h1>list of all path params</h1>
        <ul>
          {params.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </>
    );
  }
  return <h1>docs page</h1>;
}
