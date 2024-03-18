import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "../components/View";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { Avatar, IconButton, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import ShuffleIcon from "@mui/icons-material/Shuffle";

function YourComponent() {
  const [animeData, setAnimeData] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const optionsGif = {
    method: "GET",
    url: "https://any-anime.p.rapidapi.com/v1/anime/gif/10",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };

  const optionsPng = {
    method: "GET",
    url: "https://any-anime.p.rapidapi.com/v1/anime/png/10",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };

  const fetchData = async () => {
    setIsLoading(true); // Set loading to true before fetching
    try {
      const [gifResponse, pngResponse] = await Promise.all([
        axios.request(optionsGif),
        axios.request(optionsPng),
      ]);

      console.log("GIF Response:", gifResponse.data);
      console.log("PNG Response:", pngResponse.data);

      const gifData = gifResponse.data.images;
      const pngData = pngResponse.data.images;

      const combinedData = [...gifData, ...pngData];

      setAnimeData(combinedData);
      setIsLoading(false);
      console.log("Anime Data:", animeData);
    } catch (error) {
      console.error(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (initialLoad) {
      fetchData();
      setInitialLoad(false);
    }
  }, [initialLoad]);

  return (
    <>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjVmd3V1eGg5am5qNGJiMTlkaTA5NXR6bWY3ZDJsdjV1YnltbHFtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ibWGYUw1hF4Q8gMOhi/giphy.gif"
            alt="loading"
          />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Avatar sx={{ width: 40, height: 40, marginLeft:2 }}>
              <img src='https://i.pinimg.com/474x/11/e6/75/11e67578666ff4fd059bf39ebec29358.jpg' alt="Anime Avatar"  height='100%'/>
            </Avatar>
            <Typography
              variant="h6"
              style={{ marginLeft: 10, color: "white", fontSize: "1.2rem" }}
            >
              Ceasonal
            </Typography>
          </div>
          <Box
            sx={{
              backgroundColor: "#2B2D31",
              borderLeft: "2px solid pink" ,
              borderRadius: { xs: 0, md: "5px 0px 0px 5px" },
              paddingLeft: { xs: "5px", md: "10px" },
              paddingRight: { xs: "5px", md: "10px" },
              marginLeft: "60px",
              marginRight: "5px",
              overflow: "hidden",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 10, sm: 16, md: 30 }}
              justifyContent="center"
              paddingRight={2}
              paddingLeft={2}
            >
              {animeData.map((animeItem, index) => (
            <Grid item xs={5} sm={4} md={4} key={index}>
                  <Card
                    sx={{
                      maxWidth: 100,
                      margin: "auto",
                      marginTop: 5,
                      boxShadow: 3,
                      borderRadius: 5,
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 100,
                        width: 100,
                      }}
                      image={animeItem}
                      alt={`Anime Image ${index}`}
                    >
                      <Link href={animeItem} target="_blank" rel="noreferrer">
                        <IconButton>
                          <DownloadIcon />
                        </IconButton>
                      </Link>
                    </CardMedia>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Button
                onClick={fetchData}
                variant="contained"
                startIcon={<ShuffleIcon />}
                sx={{
                  marginTop: 4,
                  marginBottom: 3,
                }}
              >
                Get 20 Random Anime PFP's
              </Button>
            </div>
          </Box>
        </>
      )}
    </>
  );
}

export default YourComponent;
