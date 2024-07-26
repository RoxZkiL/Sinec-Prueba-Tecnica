import axios from "axios";
import { Box, Container, Grid, Typography } from "@mui/material";
import PostCard from "./PostCard";
import LoadMorePostsButton from "./LoadMorePostsButton";
import { useState, useEffect } from "react";

const PostsGrid = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const allPosts = await axios.get("http://localhost:3000/api/posts/");
        setData(allPosts.data);
      } catch (error) {
        console.log(error, { error: "Error al cargar los posts" });
      }
    };
    getDataFromApi();
  }, []);

  const loadMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          paddingBottom: 8,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontFamily="fantasy"
          gutterBottom
        >
          Blog
        </Typography>
        <Grid container spacing={8} justifyContent="center">
          {data.slice(0, visibleCount).map((post) => (
            <Grid item xs={14} sm={12} md={6} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
        <LoadMorePostsButton
          onClick={loadMorePosts}
          visibleCount={visibleCount}
          totalPosts={data.length}
        />
      </Box>
    </Container>
  );
};

export default PostsGrid;
