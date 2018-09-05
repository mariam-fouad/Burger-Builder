import axios from 'axios';

const instence = axios.create({
  baseURL:'https://my-burger-builder-f70e6.firebaseio.com/',
});

export default axios;
