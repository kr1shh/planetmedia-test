import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdsDetails, Dashboard, Home, Login, Register } from "./pages";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ads/:id" element={<AdsDetails />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App