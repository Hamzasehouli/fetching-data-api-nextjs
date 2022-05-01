import { useEffect } from "react";
import { useRouter } from "next/router";
const Product = function () {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
  }, [router]);
  return <div>{router.query["product-name"]}</div>;
};

export default Product;
