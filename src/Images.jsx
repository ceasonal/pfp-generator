import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "./components/View";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function YourComponent() {
  const [animeData, setAnimeData] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://pinscrape.p.rapidapi.com/api/kurizutaz/sketches/pins",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST_PINSCRAPE,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      // console.log(response.data.images);
      setAnimeData(response.data.images);
      setIsLoading(false);
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
    <div>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjVmd3V1eGg5am5qNGJiMTlkaTA5NXR6bWY3ZDJsdjV1YnltbHFtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ibWGYUw1hF4Q8gMOhi/giphy.gif"
            alt="loading"
          />
        </div>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 10, md: 20 }}
          justifyContent="center"
        >
          {animeData.map((animeItem, index) => (
            <Grid item xs={2} sm={3} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 200,
                  margin: "auto",
                  marginTop: 5,
                  boxShadow: 3,
                  borderRadius: 5,
                }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    width: 200,
                  }}
                  image={animeItem.src}
                  title={`Anime Image ${index}`}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Link href={animeItem.src} target="_blank" rel="noreferrer">
                      <IconButton sx={{ color: "#b420fd" }}>
                        <DownloadIcon />
                      </IconButton>
                    </Link>
                    <IconButton sx={{ color: "#b420fd" }}>
                      <View image={animeItem.src} />
                    </IconButton>
                  </Box>
                </CardMedia>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default YourComponent;
