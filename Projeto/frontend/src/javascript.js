import axios from 'axios';

axios.get('http://localhost:5000/')
  .then(response => console.log(response.data));
