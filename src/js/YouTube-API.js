import axios from 'axios';

const API_KEY = "AIzaSyCDg8YNpb_-7aAum3KjZ3dvcD0ZALEWH48";
const API_ADDRESS = "https://www.googleapis.com/youtube/v3/search";

async function handleClick(query) {
  try {
    const result = await axios(API_ADDRESS, {
      params: {
        q: query,
        key: API_KEY,
        maxResult: 10,
        type: 'video',
        part: 'snippet'
      }
    });
    console.log(result);

  } catch (error) {
    console.log(error);
  }
}