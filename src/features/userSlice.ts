import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types/User';
import { UserState } from '../types/UserState';

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filterUsers: (state, action) => {
      const { searchTerm, key } = action.payload;
      state.filteredUsers = state.users.filter((user) =>
        user[key as keyof User].toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.filteredUsers = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { filterUsers } = userSlice.actions;
export default userSlice.reducer;
