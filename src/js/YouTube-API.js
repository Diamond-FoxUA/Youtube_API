import axios from 'axios';

const API_KEY = "AIzaSyCDg8YNpb_-7aAum3KjZ3dvcD0ZALEWH48";
const API_ADDRESS = "https://www.googleapis.com/youtube/v3/search";

export async function getVideosByQuerry(query) {
  try {
    const result = await axios.get(API_ADDRESS, {
      params: {
        q: query,
        key: API_KEY,
        maxResults: 10,
        type: 'video',
        part: 'snippet'
      }
    });
    console.log(result.data);

  } catch (error) {
    console.log(error);
  }
};