import Link from "next/link"

const Home = () =>
{
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog">
        blog page
      </Link>
    </>
  )
};

export default Home;
