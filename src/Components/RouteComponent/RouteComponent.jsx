import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from 'Contexts/UserContext';

const RouteComponent = ({ component: Page, restricted, location, ...rest }) => {
  const { auth } = useContext(UserContext);

  if (auth && rest.path === '/login')
    return <Route {...rest} render={(props) => <Redirect to={{ pathname: '/', state: { from: props.location } }} />} />;

  if (restricted)
    return (
      <Route
        {...rest}
        render={(props) => (auth ? <Page {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
      />
    );

  return <Route {...rest} component={Page} />;
};

export default RouteComponent;
