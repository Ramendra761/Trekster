import axios from "axios";
/**base url to make request to the movie database */
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
//instance.get('/foo-bar'); ie appending to aove link
//https://api.themoviedb.org/foo-bar//

export default instance;//can have only 1 default