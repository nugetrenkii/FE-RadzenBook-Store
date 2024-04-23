import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/user/HomeScreen";
import { ROUTER } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import Profile from "./pages/user/Profile";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTER.USER.HOME,
            component: <HomeScreen/>
        },
        {
            path: ROUTER.USER.PROFILE,
            component: <Profile/>
        }
    ]

    return (
        <MasterLayout>
        <Routes>
            {
                userRouters.map((item, key)=>(
                    <Route key={key} path={item.path} element={item.component}/>
                ))
            }
        </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;