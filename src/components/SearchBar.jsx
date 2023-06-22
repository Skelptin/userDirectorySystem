import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../store/userSlice'


const SearchBar = () => {
    const dispatch = useDispatch();


    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        dispatch(setSearchQuery(searchQuery));
    };


    return (
        <div>
            <input type="text" placeholder='Search by name' onChange={handleSearch} />
        </div>
    )
}

export default SearchBar