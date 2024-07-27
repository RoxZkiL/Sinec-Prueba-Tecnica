import { Link } from "react-router-dom";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const LinkButton = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "black" }}>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ fontFamily: "fantasy", fontSize: 16 }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
