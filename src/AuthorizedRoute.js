import React from 'react';
import { Route, useHistory } from "react-router-dom";
import { useAuthorizedContext } from "./AuthorizedContext";


const AuthorizedRoute = (routeProps) => {
    const { isLoggedIn } =useAuthorizedContext();
    const history = useHistory();

    React.useEffect(() => {
        if (!isLoggedIn) {
            history.push("/unitkerja-login");
        }
    }, [isLoggedIn, history]);

    return <Route {...routeProps} />;
};

export default AuthorizedRoute;
