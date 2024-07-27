import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const LoadMorePostsButton = ({ onClick, visibleCount, totalPosts }) =>
  visibleCount < totalPosts && (
    <Button
      variant="outlined"
      color="inherit"
      onClick={onClick}
      sx={{
        fontSize: 16,
        fontFamily: "fantasy",
      }}
    >
      Cargar más posts
    </Button>
  );

export default LoadMorePostsButton;
