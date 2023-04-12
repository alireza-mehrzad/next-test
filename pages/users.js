const userList = ({ users }) => {
  return (
    <>
      <h1>userList</h1>;
      
    </>
  );
};

export default userList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
