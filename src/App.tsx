import { Routes, Route } from 'react-router-dom'
import MainPage from './components/Pages/MainPage'
import { UserData } from './mock/userData'
import Layout from './components/Pages/Layout'
import { ROUTES } from './helpers/routes'
import NotFoundPage from './components/Pages/NotFoundPage'

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<MainPage userData={UserData} />} />
          <Route path={ROUTES.HOME_GH} element={<MainPage userData={UserData} />} />
          <Route path={ROUTES.XEPPT_CARD} element={<div>XEPPT Card</div>} />
          <Route path={ROUTES.STATEMENTS} element={<div>Statements</div>} />
          <Route path={ROUTES.ADD_MONEY} element={<div>Add-money</div>} />
          <Route path={ROUTES.LINK_BANK} element={<div>Bank Account and Cards</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
