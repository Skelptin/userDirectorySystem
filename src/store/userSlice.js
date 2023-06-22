import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
    users: [],
    searchQuery: '',
    domainFilter: '',
    genderFilter: '',
    availabilityFilter: '',
    paginationPage: 1,
    teamMembers: [],
    totalPages:50
};



const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setDomainFilter: (state, action) => {
            state.domainFilter = action.payload
        },
        setGenderFilter: (state, action) => {
            state.genderFilter = action.payload;
        },
        setAvailabilityFilter: (state, action) => {
            state.availabilityFilter = action.payload
        },
        setPaginationPage: (state, action) => {
            state.paginationPage = action.payload
        },
        addToTeam: (state, action) => {
            state.teamMembers.push(action.payload)
        },
        removeFromTeam: (state, action) => {
            state.teamMembers = state.teamMembers.filter(
                (user) => user.id !== action.payload
            )
        }
    },
    
})



const store = configureStore({
    reducer: {
        users: userSlice.reducer
    },
});

export const { setUsers, setSearchQuery, setDomainFilter, setGenderFilter, setAvailabilityFilter, setPaginationPage , addToTeam , removeFromTeam} = userSlice.actions

export default store;
