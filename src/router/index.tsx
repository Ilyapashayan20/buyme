import { type FC, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HelmetLayout, RouteLoader } from 'components'

import routesList from './routes'

export const RoutesWrapper: FC = () => {
  const renderRoutes = useMemo(
    () =>
      routesList.map(({ element: Element, path, title }) => (
        <Route
          key={path}
          element={
            <Suspense fallback={<RouteLoader />}>
              <HelmetLayout title={title}>
                <Element />
              </HelmetLayout>
            </Suspense>
          }
          path={path}
        />
      )),

    []
  )

  return <Routes>{renderRoutes}</Routes>
}
