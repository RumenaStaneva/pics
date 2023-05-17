import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID __Q9CMHVpfVlb0R7nSejAWHOoRcy33-9Bg0Zq9LSzVU'
        },
        params: {
            query: term,
        }
    });

    //console.log(response.data.results);
    return response.data.results;
};

export default searchImages;