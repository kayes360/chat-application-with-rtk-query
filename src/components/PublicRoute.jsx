import { Navigate } from "react-router-dom";
import useAuth from "../features/hooks/useAuth";

export default function PublicRoute({ children }) {
    const isLoggedIn = useAuth();

    return !isLoggedIn ? children : <Navigate to="/inbox" />;
}