
import { Link } from "react-router-dom";


const Navheader =()=>{
    return(

        <nav className="navbar navbar-expand-lg bg-primary text-white">
            <div className="container">
                <Link className="navbar-brand text-white" href="/"> Todo-List </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item ps-5">
                            <Link className="nav-link active text-white" aria-current="page" to="/AddTask">Add Task</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/ViewTask">View Task</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navheader;