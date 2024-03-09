import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "./components/View";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import ShuffleIcon from '@mui/icons-material/Shuffle';

function YourComponent() {
  const [animeData, setAnimeData] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

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

      console.log("Combined Data:", combinedData);

      setAnimeData(combinedData);
      console.log("Anime Data:", animeData);
    } catch (error) {
      console.error(error);
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
     <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:40
  }}
>
  <Button
    onClick={fetchData}
    variant="contained"
    sx={{
      display: "flex",
      alignItems: "center",
      textAlign: "center", // Center the text horizontally
    }}
  >
    Get 20 Random Anime PFP's &nbsp;
    <ShuffleIcon />
  </Button>
</div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 16, md: 30 }} justifyContent="center">
        {animeData.map((animeItem, index) => (
         <Grid item xs={3} sm={4} md={4} key={index}>
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
                title={`Anime Image ${index}`}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                    <Link
                        href={animeItem}
                        target="_blank"
                        rel="noreferrer"
                        >

                  <IconButton>
                    <DownloadIcon />
                  </IconButton>
                        </Link>
                  <IconButton>
                    <View image={animeItem}/>
                  </IconButton>
                </Box>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default YourComponent;
