import { Routes, Route } from 'react-router-dom'
import MainPage from './components/Pages/MainPage'
import { UserData } from './mock/userData'
import Layout from './components/Pages/Layout'
import { ROUTES } from './helpers/routes'

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<MainPage userData={UserData} />} />
          <Route path={ROUTES.HOME_GH} element={<MainPage userData={UserData} />} />
          <Route path={ROUTES.XEPPT_CARD} element={<div>Card</div>} />
          <Route path={ROUTES.STATEMENTS} element={<div>Statements</div>} />
          <Route path={ROUTES.ADD_MONEY} element={<div>Add-money</div>} />
          <Route path="*" element={ROUTES.HOME} />
        </Route>
      </Routes>
    </>
  )
}

export default App
