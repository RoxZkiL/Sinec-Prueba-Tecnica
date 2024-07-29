import { Box, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MainTypography from "../Typography/MainTypography";
import CustomTextField from "../Textfield/CustomTextFields";
import usePostFormValidation from "./usePostFormValidation";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { errors, validateForm } = usePostFormValidation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm(title, content, author)) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:3000/api/posts/", {
        title,
        content,
        author,
      });
      navigate(`/posts/${response.data.id}`);
    } catch (error) {
      console.error("Error al crear el post", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          padding: 8,
          gap: 2,
        }}
      >
        <MainTypography>Crear Post</MainTypography>

        <CustomTextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingresa el título del post ..."
          variant="outlined"
          fullWidth
          error={!!errors.title}
          helperText={errors.title}
        />

        <CustomTextField
          label="Mensaje"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ingresa el contenido de tu post..."
          variant="outlined"
          fullWidth
          multiline
          rows={10}
          error={!!errors.content}
          helperText={errors.content}
        />

        <CustomTextField
          label="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Ingresa el autor del post..."
          variant="outlined"
          fullWidth
          error={!!errors.author}
          helperText={errors.author}
        />

        <Button
          type="submit"
          variant="outlined"
          color="inherit"
          sx={{ fontFamily: "fantasy", fontSize: 16 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creando..." : "Crear Nuevo Post"}
        </Button>
      </Box>
    </Container>
  );
};

export default CreatePost;
