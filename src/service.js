import axios from "axios";
import api from "./api";

export const getAlbums = config => api.get("albums", config);

export const downloadImage = config =>
  axios.get(
    "https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg",
    config
  );
