import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./context";

function App() {
  return (
    <>
      <UserContext.Provider
        value={{ firstName: "Wendy", lastName: "Montagnon" }}>
        <Router>
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
