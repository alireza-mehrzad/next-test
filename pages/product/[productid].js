import { useRouter } from "next/router";
const productDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>detail about product {productId} </h1>;
};

export default productDetails;
