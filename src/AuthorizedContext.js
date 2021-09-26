import React from "react";

const AuthorizedDefaultValue = {
  isLoggedIn: false,
  userLevel: "",
  setAuthorizedValue: () => {},
};

const AuthorizedContext = React.createContext(AuthorizedDefaultValue);

const AuthorizedContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userLevel, setUserLevel] = React.useState("");

  const setAuthorizedValue = React.useCallback(
    (loginStatus, userLevelStatus) => {
      setIsLoggedIn(loginStatus);
      setUserLevel(userLevelStatus);
    },
    [setIsLoggedIn, setUserLevel]
  );

  return (
    <AuthorizedContext.Provider
      value={{ isLoggedIn, userLevel, setAuthorizedValue }}
    >
      {props.children}
    </AuthorizedContext.Provider>
  );
};

const useAuthorizedContext = () => {
  const { isLoggedIn, userLevel, setAuthorizedValue } =
    React.useContext(AuthorizedContext);

  return { isLoggedIn, userLevel, setAuthorizedValue };
};

export { AuthorizedContextProvider, useAuthorizedContext };
