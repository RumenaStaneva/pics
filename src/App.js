import SearchBar from './components/SearchBar'
import searchImages from './api';
import ImageList from './components/ImageList'
import { useState } from 'react';

function App() {
    const [imageList, setImageList] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImageList(result);

    }
    return <div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={imageList} />
    </div>
}

export default App;