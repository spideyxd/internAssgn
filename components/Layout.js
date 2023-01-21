import ResponsiveAppBar from "./Navbar";
import Section from "./Section";
export default function Layout({ children }) {
  return (
    <>
      <ResponsiveAppBar/>
      <main>{children}</main>   
    </>
  )
}