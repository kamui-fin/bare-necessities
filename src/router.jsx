import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index'
import Profile from './pages/profile'
import Leaderboard from './pages/leaderboard'
import Sidebar from './components/Sidebar'
import './styles/layout.css'
import Settings from './pages/settings'
import Fire from './pages/fire'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter history={history}>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={
                            <div className="entry">
                                <Sidebar />
                                <div className="container">
                                    <Home />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/leaderboard"
                        exact
                        element={
                            <div className="entry">
                                <Sidebar />
                                <div className="container">
                                    <Leaderboard />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/profile/:id?"
                        exact
                        element={
                            <div className="entry">
                                <Sidebar />
                                <div className="container">
                                    <Profile />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/settings"
                        exact
                        element={
                            <div className="entry">
                                <Sidebar />
                                <div className="container">
                                    <Settings />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/fire"
                        exact
                        element={
                            <div className="entry">
                                <Sidebar />
                                <div className="container">
                                    <Fire />
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter
