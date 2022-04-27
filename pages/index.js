import { useEffect, useState } from "react";
const Home = function (props) {
  // const [data, setData] = useState([]);
  useEffect(async () => {
    await fetch("/api/auth");
  }, []);
  return (
    <div>
      <p>home</p>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
