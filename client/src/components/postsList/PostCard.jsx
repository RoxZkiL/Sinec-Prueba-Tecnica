/* eslint-disable react/prop-types */
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <Link to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 6,
        border: 1,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          textAlign="center"
          fontFamily="fantasy"
        >
          {post.title}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

export default PostCard;
