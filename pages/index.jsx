
//Component
import HomePage from "../components/template/home/HomePage";

const Home = ({data}) => {
    console.log(data)
    return <HomePage data={data} />
};

export default Home;


export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const data = await res.json();

  return {
      props: {
          data
      }
  }
}