import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const MainTypography = ({ children }) => {
  return (
    <Typography variant="h2" component="h1" fontFamily="fantasy" gutterBottom>
      {children}
    </Typography>
  );
};

export default MainTypography;
