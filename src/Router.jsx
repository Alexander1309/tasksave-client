import { useContext } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import { authContext } from './contexts/authContext'
import Auth from './pages/auth/auth'
import SignIn from './components/SignIn/SignIn'

const PrivateRoute = ({children, isAuth}) => isAuth ? children : <Navigate to="/auth/signIn" replace />

const Router = () => {
    const {isAuth} = useContext(authContext)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/" element={<Auth />} >
                    <Route path="signIn" element={<SignIn />} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router