import React from 'react'

const UserCard = ({ user, deleteUserById, setupdateInfo, handleOpen }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
    }

    const handleUpdate = () => {
        setupdateInfo(user)
        handleOpen()
    }

  return (
    <article className='card'>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span>Email: </span>{user.email}</li>
            <li><span>Birthday:</span>{user.birthday}</li>
        </ul>
        <button className='card-btn' onClick={handleDelete}>Detele</button>
        <button className='card-btn' onClick={handleUpdate}>Update</button>
    </article>
  )
}

export default UserCard