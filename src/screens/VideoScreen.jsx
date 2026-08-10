import data from "../data/videos.json";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

export default function VideoScreen() {
  const { id } = useParams();

  const video = data.find((e) => e.id === id);

  return (
    <Container
      sx={{
        py: 5,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video style={{ borderRadius: "10px" }} width="100%" controls loop>
        <source src={`/${video?.title}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </Container>
  );
}
