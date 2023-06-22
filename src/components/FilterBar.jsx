import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setDomainFilter,
    setGenderFilter,
    setAvailabilityFilter
} from '../store/userSlice'

const FilterBar = () => {

    const dispatch = useDispatch();
    const domainFilter = useSelector((state) => state.users.domainFilter)
    const genderFilter = useSelector((state) => state.users.genderFilter)
    const availabilityFilter = useSelector(
        (state) => state.users.availabilityFilter
    )

    const handleDomainFilter = (e) => {
        dispatch(setDomainFilter(e.target.value))
    }

    const handleGenderFilter = (e) => {
        dispatch(setGenderFilter(e.target.value))
    }

    const handleAvailabilityFilter = (e) => {
        dispatch(setAvailabilityFilter(e.target.value))
    }




    return (
        <div className=''>
            <select value={domainFilter} onChange={handleDomainFilter}>
                <option>All Domains</option>
                <option>Sales</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>IT</option>
                <option>UI Designing</option>
                <option>Management</option>
            </select>

            <select value={genderFilter} onChange={handleGenderFilter}>
                <option>All Genders</option>
                <option>Male</option>
                <option>Female</option>
                <option>Polygender</option>
                <option>Non-binary</option>
                <option>Genderfluid</option>
            </select>

            <select value={availabilityFilter} onChange={handleAvailabilityFilter}>
                <option>Both</option>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
    )
}

export default FilterBar