import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./feature/authenticate/Signup";
import Login from "./feature/authenticate/Login";
import Home from "./feature/dashboard/Home";
import About from "./feature/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tablecontent from "./feature/dashboard/Tablecontent";
import Quiz from "./feature/quiz/Quiz";
import ReactToastify from "./components/ReactToastify";
import UserProvider from "./provider/userProvider";
import Dashboard from "./feature/dashboard/Dashboard";
import TakeQuiz from "./feature/quiz/TakeQuiz";
import Security from "./feature/security";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/table-content" element={<Tablecontent />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/security" element={<Security />} />
            <Route path="/take-quiz/:quizId" element={<TakeQuiz />} />
          </Route>
        </Routes>
      </UserProvider>
      <ReactToastify />
    </BrowserRouter>
  );
}

export default App;
