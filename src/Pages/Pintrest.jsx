import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "../components/View";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";

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
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
       <img
         src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjVmd3V1eGg5am5qNGJiMTlkaTA5NXR6bWY3ZDJsdjV1YnltbHFtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ibWGYUw1hF4Q8gMOhi/giphy.gif"
         alt="loading"
         style={{ margin: "auto" }}
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
              borderLeft: "4px solid pink" ,
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
          columns={{ xs: 10, sm: 10, md: 20 }}
          justifyContent="center"
          marginBottom={3}
        >
          {animeData.map((animeItem, index) => (
            <Grid item xs={5} sm={3} md={4} key={index}>
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
        </Box>
      </>
      )}
    </div>
  );
}

export default YourComponent;
