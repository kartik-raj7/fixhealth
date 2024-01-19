import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
  return (
    <Router>
      <Suspense>
        <Routes>
          {routes.map(({ path, component: Component, exact, roles }) => (
            <Route
              key={path}
              path={path}
              element={<Component roles={roles} />}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
