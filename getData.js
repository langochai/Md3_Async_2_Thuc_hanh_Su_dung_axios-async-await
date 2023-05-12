let axios = require('axios')
async function getJSONAsync() {
    let json = await axios.get('http://jsonplaceholder.typicode.com/posts/');
    return json.data;
}
getJSONAsync().then(result =>console.log(result[0]));