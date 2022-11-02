import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from '../../redux/action/auth';

export const Navbar = () => {
    const cartState = useSelector((state) => state.handleCart);
    const authState = useSelector((state) => state.handleAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm bg-white">
                <div className="container">
                    <NavLink className="navbar-brand" to="/home">VK</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                        <span>Welcome {authState?.user?.name}</span> | 
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> Cart ({cartState.length})
                            </NavLink>

                            <button type="button" onClick={handleLogout} className="btn btn-outline-warning ms-2">
                                <i className="fa fa-sign-out me-1"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}