import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, addToTeam, removeFromTeam  } from '../store/userSlice';
import UserCard from './UserCard';
import Pagination from './Pagination';
import myData from '../data/heliverse_mock_data.json';
import { setPaginationPage } from '../store/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const currentPage = useSelector((state) => state.users.paginationPage)
  const usersPerPage = 20;
  const domainFilter = useSelector((state) => state.users.domainFilter);
  const genderFilter = useSelector((state) => state.users.genderFilter);
  const availabilityFilter = useSelector((state) => state.users.availabilityFilter);
  const searchQuery = useSelector((state) => state.users.searchQuery);
  const teamMembers = useSelector((state) => state.users.teamMembers);

  
  useEffect(() => {
    dispatch(setUsers(myData));
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    dispatch(setPaginationPage(pageNumber));
  };

  

  const filteredUsers = users.filter((user) => {
    const fullName = user.first_name + user.last_name;
    let filterCondition = true;

    if (domainFilter && domainFilter !== 'All Domains' && user.domain !== domainFilter) {
      filterCondition = false;
    }
    if (genderFilter && genderFilter !== 'All Genders' && user.gender !== genderFilter) {
      filterCondition = false;
    }
    if (
      availabilityFilter &&
      availabilityFilter !== 'Both' &&
      user.available !== (availabilityFilter === 'Yes')
    ) {
      filterCondition = false;
    }
    if (searchQuery && !fullName.toLowerCase().includes(searchQuery.toLowerCase())) {
      filterCondition = false;
    }

    return filterCondition;
  });

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  
  const handleAddToTeam = (user) => {
    dispatch(addToTeam(user));
  };

  const handleRemoveFromTeam = (userId) => {
    dispatch(removeFromTeam(userId));
  };

  return (
    <div className="flex">
      <div className="w-3/4 pr-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {currentUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onAddToTeam={() => handleAddToTeam(user)}
              onRemoveFromTeam={() => handleRemoveFromTeam(user.id)}
            />
          ))}

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => handlePageChange(page)}
          />
        </div>
      </div>

      <div className="w-1/4">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Selected Team Members:</h2>
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-200 p-4 rounded-md mb-4">
              <p>Name: {member.first_name} {member.last_name}</p>
              <p>Email: {member.email}</p>
              <p>Domain: {member.domain}</p>
              <p>Gender: {member.gender}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
