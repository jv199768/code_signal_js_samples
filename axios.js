import axios from 'axios';
axios.get('some_api_url').then(response => {
    // Here is the response from the API
    console.log(response.data);
});

axios.get('some_api_url')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
