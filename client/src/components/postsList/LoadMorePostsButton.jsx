import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const LoadMorePostsButton = ({ onClick, visibleCount, totalPosts }) =>
  visibleCount < totalPosts && (
    <Button
      variant="outlined"
      color="inherit"
      size="large"
      onClick={onClick}
      sx={{
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "fantasy",
      }}
    >
      Cargar más posts
    </Button>
  );

export default LoadMorePostsButton;
