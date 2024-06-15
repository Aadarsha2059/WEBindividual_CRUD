import { useNavigate } from "react-router-dom";

function Home(){

    const navigate= useNavigate()

    return (<>
    this is home page

    <button onClick={()=>navigate("/book")}>Display the list of book</button>
    </>)
}

export default Home;