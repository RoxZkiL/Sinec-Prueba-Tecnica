import { useEffect, useState } from "react";
import { Box, Typography, Container, Paper, Divider } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import LinkButton from "../Button/LinkButton";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostById = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const postById = await axios.get(
          `http://localhost:3000/api/posts/${id}`
        );
        setData(postById.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Post no encontrado");
        } else {
          setError("Error al obtener el post");
        }
      }
    };
    getSinglePost();
  }, [id]);

  if (error) {
    return (
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: "800px" }}>
          <Box textAlign="center">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              fontFamily="fantasy"
            >
              {error}
            </Typography>
            <Divider sx={{ my: 3 }} />
            <LinkButton to={"/posts"}>Volver a todos los posts</LinkButton>
          </Box>
        </Paper>
      </Container>
    );
  }

  if (!data) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: "800px" }}>
        <Box textAlign="center">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontFamily="fantasy"
          >
            {data.title}
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Box sx={{ my: 2 }}>
            <Typography
              variant="body1"
              component="div"
              fontFamily="fantasy"
              sx={{ fontSize: "1.5rem" }}
            >
              {data.content}
            </Typography>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Typography
            variant="subtitle2"
            color="textSecondary"
            fontFamily="fantasy"
            sx={{ fontSize: "1rem" }}
          >
            Autor: {data.author}
          </Typography>
          <Divider sx={{ my: 3 }} />
          <LinkButton to={"/posts"}>Volver a todos los posts</LinkButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostById;
