import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addToTeam, removeFromTeam } from '../store/userSlice'

const UserCard = ({ user }) => {

  const [selected, setSelected] = useState(false)

  const dispatch = useDispatch()

  const handleCheckboxChange = () => {
    setSelected(!selected)

    if (selected) {
      dispatch(removeFromTeam(user.id))
    } else {
      dispatch(addToTeam(user))
    }
  }

  return (
    <div className="bg-white  rounded-lg shadow-lg p-4 border-2 border-gray-300">
      <h3 className=" m-2 text-xl font-semibold">{user.first_name} {user.last_name}</h3>
      <p className="text-gray-500">Email: {user.email}</p>
      <p className="text-gray-500">Gender:{user.gender}</p>
      <p className="text-gray-500">Domain: {user.domain}</p>
      <p className="text-gray-500">Availability: {user.available ? 'Yes' : 'No'}</p>
      <label>
        <input
          type="checkbox"
          checked={selected}
          onChange={handleCheckboxChange}
        />
        Select
      </label>

      <br></br>
      <br></br>
    </div>
  )
}

export default UserCard