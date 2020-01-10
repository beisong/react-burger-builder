import axios from 'axios';

const instance = axios.create({
  baseURL:'https://react-my-burger-fa412.firebaseio.com/'
});

export default instance;