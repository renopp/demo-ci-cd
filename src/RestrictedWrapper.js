import React from 'react';
import { useHistory } from "react-router-dom";
import { useAuthorizedContext } from "./AuthorizedContext";


const RestrictedWrapper = (props) => {
    const { isLoggedIn } =useAuthorizedContext();
    const history = useHistory();

    React.useEffect(() => {
        if (isLoggedIn) {
            history.push("/");
        }
    }, [isLoggedIn, history]);

    return isLoggedIn ? null : props.children;
};

export default RestrictedWrapper;
