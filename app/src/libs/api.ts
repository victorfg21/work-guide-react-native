import axios from 'axios';

export default axios.create({
  baseURL: "https://my-json-server.typicode.com/victorfg21/work-guide-fake-api/",
  headers: {
    "Content-type": "application/json"
  }
});