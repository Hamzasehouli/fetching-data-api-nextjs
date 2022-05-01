//Hamza Sehouli

const Product = function (props) {
  return <div>{props.data.title}</div>;
};

export async function getServerSideProps(context) {
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

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           productid: "1",
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   const param = context.params.productid;
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${param}`
//   );

//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
