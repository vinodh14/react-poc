import {Navigate} from 'react-router-dom';

export const ProtectedRoute = ({ children, ...rest }) => {
    const { isLoggedIn } = rest;

    return (
            !isLoggedIn ? <Navigate to="/" /> : children
    )
}