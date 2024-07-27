import axios from "axios";
import { Box, Container, Grid } from "@mui/material";
import PostCard from "./PostCard";
import LoadMorePostsButton from "../Button/LoadMorePostsButton";
import { useState, useEffect } from "react";
import LinkButton from "../Button/LinkButton";
import MainTypography from "../Typography/MainTypography";

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
          padding: 8,
        }}
      >
        <MainTypography>Blog</MainTypography>
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
          <LinkButton to={"/posts/create"}>Crear nuevo post</LinkButton>
        </Box>
      </Box>
    </Container>
  );
};

export default PostsGrid;
