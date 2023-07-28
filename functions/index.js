const axios = require("axios").default;

exports.handler = async function(event, context) {
  const url = 'https://memeuserserver.onrender.com/hello/';
const url2 = 'https://memegameserver.onrender.com/hello/' // Replace this with the actual URL of the server you want to send the request to
console.log("Hello");
  
await axios.get(url)
  .then(response => {
    console.log('HTTP request sent successfully',response.data);
  })
  .catch(error => {
    console.error('Error sending HTTP request:', error.message);
  });

await axios.get(url2)
  .then(response => {
    console.log('HTTP request sent successfully',response.data);
  })
  .catch(error => {
    console.error('Error sending HTTP request:', error.message);
  });

  return {
      statusCode: 200,
  };
};
