import Navbar from "./Navbar/Navbar"
// import s from './layout.module.css'
const Layout = ({children}) => {
    return(
    <div>  
         <Navbar/>
         {children}
    </div>
    
    )

}

export default Layout