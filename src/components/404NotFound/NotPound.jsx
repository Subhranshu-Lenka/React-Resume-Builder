import { Link } from "react-router-dom"

function NotPound() {
    return (
        <div>
            <h1>404! Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Please find a way back to the home page.
                <br />
                <Link to="/">Home</Link>
            </p>
        </div>
    )
}

export default NotPound