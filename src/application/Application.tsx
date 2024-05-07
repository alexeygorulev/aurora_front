import React from 'react';
import Layout from 'components/molecules';
// import Auth from './Auth';
import Alerts from 'components/atoms/Alerts';
import { useGetUserProfileDataQuery } from 'api/store';
import Loader from 'components/atoms/Loader';
import { Navigate, Routes, Route } from 'react-router-dom';
import { routes } from './routing';

export default function Application() {
  const { data: userProfile, error, isLoading } = useGetUserProfileDataQuery();

  if (isLoading) {
    return <Loader size="xl" isCentred />;
  }

  const shouldRedirectToAuth = !userProfile || Boolean(error);

  return (
    <>
      <Navigate to={shouldRedirectToAuth ? '/authentication' : '/'} replace />
      <Layout>
        <Routes>
          {routes.map((route: any) => (
            <Route
              key={route.id}
              path={route.path}
              element={
                <React.Suspense fallback={null}>
                  <route.component />
                </React.Suspense>
              }
            />
          ))}
        </Routes>
      </Layout>
      <Alerts />
    </>
  );
}
