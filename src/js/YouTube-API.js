import axios from 'axios';
import { showError } from './ux-ui';

const API_KEY = "AIzaSyCDg8YNpb_-7aAum3KjZ3dvcD0ZALEWH48";
const API_ADDRESS = "https://www.googleapis.com/youtube/v3/search";

export default async function getVideosByQuerry(query) {
  try {
    const response = await axios.get(API_ADDRESS, {
      params: {
        q: query,
        key: API_KEY,
        maxResults: 10,
        perPage: 10,
        type: 'video',
        part: 'snippet'
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    showError('Opps... Something went wrong. Try again later.');
  }
};