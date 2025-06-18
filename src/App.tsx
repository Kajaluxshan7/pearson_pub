import { Box, Typography, Container, Button, TextField } from "@mui/material";

export default function App() {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "#f5c518",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          The Pearson Pub
        </Typography>
        <Typography variant="h5" gutterBottom>
          Welcome! Our restaurant page is coming soon.
        </Typography>
        <Typography sx={{ mb: 3 }}>
          We are cooking something delicious for you. Stay tuned!
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", gap: 1, justifyContent: "center" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            label="Notify me"
            variant="filled"
            size="small"
            sx={{
              bgcolor: "#333",
              borderRadius: 1,
              input: { color: "#f5c518" },
              "& .MuiInputLabel-root": { color: "#f5c518" },
            }}
            type="email"
            placeholder="Enter your email"
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f5c518",
              color: "#121212",
              "&:hover": { bgcolor: "#d4af37" },
            }}
            type="submit"
          >
            Notify
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
