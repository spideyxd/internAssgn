import ResponsiveAppBar from './Navbar'
const Layout = ({child}) => {
  return (
    <div>
    <ResponsiveAppBar/> 
    {child}
    </div>
  )
}

export default Layout