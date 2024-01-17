/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { publicRoutes } from './routers'
import Layout from './components/layouts/Layout'

function App() {
  return (
    <>
      <div className="App">
        <main>
          <Routes>
            {publicRoutes.map((route: any, index) => {
              const LayoutClient = route.layout || Layout
              const Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <LayoutClient>
                      <Page />
                    </LayoutClient>
                  }
                />
              )
            })}
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
