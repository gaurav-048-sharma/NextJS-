
const singlePostPage = async(props) => {
    const { userId } = await props.params;
  console.log(userId);
  return (
    <div>{userId}</div>
  )
}

export default singlePostPage