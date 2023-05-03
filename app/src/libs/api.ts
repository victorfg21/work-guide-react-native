/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
export const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/victorfg21/work-guide-fake-api'
});