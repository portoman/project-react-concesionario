import { useContext } from "react"
import { Context } from "../../SharedState";

function Logout() {

    const { actions } = useContext(Context);

    function clickHandler() {
        actions.deleteToken()
    }

    return (
        <div id="Logout">
            <button onClick={clickHandler}>Logout</button>
        </div>
    )
}

export default Logout