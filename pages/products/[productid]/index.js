import { useRouter } from "next/router";
const Product = function (props) {
  console.log(props.data);
  return <div>product</div>;
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productid: "1",
        },
      },
    ],
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const param = context.params.productid;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${param}`
  );

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default Product;
