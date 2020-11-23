import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import routes from "../routes";
function showContentMenus() {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {

            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            )
        }
        )
    }
    return <Switch>{result}</Switch>

}
export default showContentMenus;