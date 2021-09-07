import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ components, path, ...rest }) => {
    const loggedIn = localStorage.getItem('authToken');;
    return (
      <Route
        path={path}
        {...rest}
      >
        {loggedIn !== null ? components?.map((Comp, index) => (<Comp key={index} />))
        : 
        (<Redirect to="/login" />)
        }

      </Route>
    );
};


export default ProtectedRoute;