import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });
    switch (response.status) {
      case 200:
        setVideos(response.data.items);
        break;
      default:
        console.error("Algo salio mal");
    }
  };

  return [videos, search];
};

export default useVideos;
