import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cardd = (props) => {
  return (
    <Card sx={{ minWidth: 275 }} style={{border: "none", boxShadow: "none", marginLeft:"5vw",width:"33vw" }}>
      <CardContent>
        <Typography
          sx={{ fontSize: "3rem" }}
          style={{ fontFamily: "glb", lineHeight: "1.2" }}
          color="#000"
          gutterBottom
        >
         {props.heading}
        </Typography>

        <Typography style={{fontSize:"1.125rem ",color:"#4d4d4d"}} variant="body2">
        {props.subHeading}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cardd;
