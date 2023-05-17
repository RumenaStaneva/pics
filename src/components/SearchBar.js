import { useState } from "react";
import './SearchBar.css'

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        let value = event.target.value;
        setTerm(value);
    };

    return <div className="search-bar">
        <form action="submit" onSubmit={handleFormSubmit}>
            <label htmlFor="search-input">Enter search term</label>
            <input name="search-input" type="text" onChange={handleChange} value={term} />
            {/* <button onClick={handleFormSubmit}>Submit</button> */}
        </form>
    </div>
}


export default SearchBar;