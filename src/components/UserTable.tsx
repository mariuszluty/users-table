import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/userSlice';
import { AppDispatch, RootState } from '../app/store';
import SearchInput from './SearchInput';

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, filteredUsers, loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Users</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="col-3">Name</th>
            <th className="col-3">Username</th>
            <th className="col-3">Email</th>
            <th className="col-3">Phone</th>
          </tr>
          <SearchInput />
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
