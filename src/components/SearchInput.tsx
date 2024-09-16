import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterUsers } from '../features/userSlice';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const term = e.target.value;
    setSearchTerm(term);
    dispatch(filterUsers({ searchTerm: term, key }));
  };

  return (
    <tr className="mb-4">
        <th className="form-group col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            onChange={(e) => handleSearch(e, 'name')}
          />
        </th>
        <th className="form-group col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by username"
            onChange={(e) => handleSearch(e, 'username')}
          />
        </th>
        <th className="form-group col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by email"
            onChange={(e) => handleSearch(e, 'email')}
          />
        </th>
        <th className="form-group col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by phone"
            onChange={(e) => handleSearch(e, 'phone')}
          />
        </th>
    </tr>
  );
};

export default SearchInput;
