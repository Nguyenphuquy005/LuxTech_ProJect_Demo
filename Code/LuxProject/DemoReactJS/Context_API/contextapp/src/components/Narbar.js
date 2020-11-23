import React, { Component, useContext } from 'react';
import AuthContextProvider, { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class Narbar extends Component {
//     // static contextType = ThemeContext;
//     render() {
//         // const { isLightThem, light, dark } = this.context;
//         // const theme = isLightThem ? light : dark;
//         return (
//             <AuthContext.Consumer>{(authcontext) => (
//                 <ThemeContext.Consumer>{(themecontext) => {
//                     const { isLightTheme, light, dark } = themecontext;
//                     const theme = isLightTheme ? light : dark;
//                     const { isAuthenticated, toggleAuth } = authcontext;
//                     return (
//                         < nav style={{ background: theme.ui, color: theme.syntax }} >
//                             <h1>Context App</h1>
//                             <div onClick={toggleAuth}>
//                                 {isAuthenticated ? "Logged in" : "Logged out"}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>

//                             </ul>

//                         </ nav >
//                     )
//                 }}


//                 </ThemeContext.Consumer>
//             )}

//             </AuthContext.Consumer>


//         )
//     }
// }
const Narbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        < nav style={{ background: theme.ui, color: theme.syntax }} >
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? "Logged in" : "Logged out"}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

            </ul>

        </ nav >
    );
}


export default Narbar;