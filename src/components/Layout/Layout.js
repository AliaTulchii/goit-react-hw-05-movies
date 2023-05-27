import { NavLink, Outlet } from "react-router-dom";
import css from '../App/App.module.css'



export const Layout = () => {
    


    return <div>
                <nav className={css.AppNav}>
                    <div>
                        <NavLink to="/" className={css.AppNavTitle}>Home</NavLink>
                        <NavLink to="/movies" className={css.AppNavTitle}>Movies</NavLink>
                    </div>
                    <h1 className={css.AppLogo}>MoviesForest</h1>
        
                </nav>
                <Outlet/>
            </div>
}