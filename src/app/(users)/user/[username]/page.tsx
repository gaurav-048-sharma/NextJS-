const singlePage = async (props) => {
    const { username } =await props.params;
    console.log(username)
    return (
        <div>
            <h1>User: {username}</h1>
        </div>
    );
}
export default singlePage;