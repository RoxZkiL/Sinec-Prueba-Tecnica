import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import StyledTextField from "./StyledTextField";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/posts/", {
        title,
        content,
        author,
      });
      navigate(`/posts/${response.data.id}`);
    } catch (error) {
      console.error("Error al crear el post", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Crear Post
        </Typography>
        <StyledTextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingresa el título del post..."
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Mensaje"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ingresa el contenido de tu post..."
          variant="outlined"
          fullWidth
          multiline
          rows={10}
        />
        <StyledTextField
          label="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Ingresa el autor del post..."
          variant="outlined"
          fullWidth
        />
        <Button
          type="submit"
          variant="outlined"
          color="inherit"
          sx={{ fontFamily: "fantasy", fontSize: 16 }}
        >
          Crear Nuevo Post
        </Button>
      </Box>
    </Container>
  );
};

export default CreatePost;
