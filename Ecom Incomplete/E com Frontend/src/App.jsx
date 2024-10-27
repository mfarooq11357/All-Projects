import { useState ,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from "./pages/Login/Login"
// import Footer from './Pages/Footer/Footer';
// import Signup from './Pages/Signup/Signup';
// import SignIn from './Pages/SignIn/SignIn'
// import Home from './Pages/Home/Home';
// import StepsPage from './Pages/stepsPage/Steps';
// import PrivateRoute from './Components/Loader/authenticatiom/PrivateRoute ';
// import UserProfile from './Pages/UserProfile/UserProfile ';
// import ResetPassword from './Components/Loader/ResetPassword/ResetPassword';
// import CandidateList from './Pages/CandidateList/candidateList';
// import Vote from "./Pages/vote/vote"
// import AdminPanel from './Admin-panel/Admin-panel';
// import OverviewEditCandidate from './Pages/OverviewEditCandidate';
// import OverviewDeleteCandidate from './Pages/OverviewDeleteCandidate';

function App() {
  return (
    <>
     <Router>
     {/* <PageTitleHandler> */}
            <div>
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/Login" element={<Login/>} />
                    {/* <Route path="/steps" element={<StepsPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/candidate" element={<CandidateList />} />
                    <Route path="/vote" element={<PrivateRoute element={Vote} />}/>
                    <Route path="/profile" element={<PrivateRoute element={UserProfile} />}/>
                    <Route path="/ResetPassword" element={<PrivateRoute element={ResetPassword} />}/>
                    <Route path="/AddCandidate" element={<PrivateRoute element={AddCandidate} />}/>
                    <Route path="OverviewEditCandidate" element={<PrivateRoute element={OverviewEditCandidate} />}/>
                    <Route path="/EditCandidate/:id" element={<PrivateRoute element={EditCandidate} />}/>
                    <Route path="/DeleteCandidate" element={<PrivateRoute element={OverviewDeleteCandidate} />}/>
                    <Route path="/admin-panel" element={<PrivateRoute element={AdminPanel} />}/> */}

                </Routes>
                 {/* <Footer/> */}
            </div>
            {/* </PageTitleHandler> */}
        </Router>
     </>
  )
}

export default App
