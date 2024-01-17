import { Routes, Route } from "react-router-dom"
import MainPage from "./components/Pages/MainPage"
import { UserData } from "./mock/userData"
import Layout from "./components/Pages/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage userData={UserData} />} />
          <Route path="/card" element={<div>Card</div>} />
          <Route path="/statements" element={<div>Statements</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
