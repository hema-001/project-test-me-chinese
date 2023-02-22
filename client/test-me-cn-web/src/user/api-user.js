import axios from "../axios/axios";

const create = async (user) => {
  try {
    const response = await axios.post('/api/users/', user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const list = async (signal) => {
  try {
    const response = await axios.get('/api/users/', {
      signal: signal,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const read = async (params, credentials, signal) => {
  try {
    const response = await axios.get('/api/users/' + params.userId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
      signal: signal,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const update = async (params, credentials, user) => {
  try {
    const response = await axios.put('/api/users/' + params.userId, user, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const remove = async (params, credentials) => {
  try {
    const response = await axios.delete('/api/users/' + params.userId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { 
    create, 
    list, 
    read, 
    update, 
    remove 
};