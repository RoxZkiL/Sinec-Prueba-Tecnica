import axios from "axios";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import PostCard from "./PostCard";
import LoadMorePostsButton from "./LoadMorePostsButton";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostsGrid = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            marginTop: 8,
          }}
        >
          <LoadMorePostsButton
            onClick={loadMorePosts}
            visibleCount={visibleCount}
            totalPosts={data.length}
          />
          <Link
            to={"/posts/create"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontFamily: "fantasy", fontSize: 16 }}
            >
              Crear Nuevo Post
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default PostsGrid;
