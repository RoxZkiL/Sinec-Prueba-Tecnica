import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Button,
} from "@mui/material";

const PostById = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const postById = await axios.get(
          `http://localhost:3000/api/posts/${id}`
        );
        setData(postById.data);
      } catch (error) {
        console.log({ error: "Error al obtener el post" });
      }
    };
    getSinglePost();
  }, [id]);

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
          <Link
            to={"/posts"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontFamily: "fantasy", fontSize: 16 }}
            >
              Volver a todos los Posts
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostById;
