import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const pages = ["Product", "Our Story", "Resources"];

function ResponsiveAppBar() {
  const theme = useTheme();
  const downMed = useMediaQuery(theme.breakpoints.down("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar  style={{ background: "#000" }}>
      <Container maxWidth="xl">
        {/* style={{background:"#fff"}}  */}
        <Toolbar disableGutters>
          <Image
            src="/logo.png"
            alt="Picture of the author"
            style={{ marginLeft: "3vw" }}
            width="34"
            height="34"
          />
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: "1vw",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  marginLeft: "2vw",
                  fontSize: "16px",
                  my: 2,
                  textTransform: "none",
                  fontFamily: "gl",
                  color: "white",
                  display: "block",
                  display: "flex",
                }}
              >
                {page}{" "}
                {page != "Our Story" && (
                  <KeyboardArrowDownIcon style={{ paddingTop: "1px" }} />
                )}
              </Button>
            ))}
          </Box>
          {!downMed && (
            <Button
              style={{
                padding: "0.75rem 1.5rem",
                border: "1px #000",
                borderRadius: "0.6rem",
                backgroundImage: "linear-gradient(135deg,#0084e9,#762cec)",
                color: "#fff",
                fontFamily: "gl",
                textTransform: "none",
              }}
            >
              Book a Demo
            </Button>
          )}
          {/* {downSm && (
            <div style={{ display:"flex", flexDirection:"row-reverse"}}>
              <Button style={{ }}>hi</Button>
            </div>
          )} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
