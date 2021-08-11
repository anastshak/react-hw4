import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectUserById } from "../store/users/selectors";
import "./User.css";

const User = () => {
    const params = useParams();
    const user = useSelector(selectUserById(params.id));
    if (!user) {
        return <div>Loading data...</div>;
    }

    return (
        <div className="user">
            <h3>User login: {user.login}</h3>
            <img src={user.avatar_url} alt="user's avatar"></img>
            <p><a href={user.html_url}>Link to repo</a></p>
            
        </div>
    );
};

export default User;