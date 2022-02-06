import { env } from '../env';

/**
 * Service for comprobate the info for user for login
 * @param {*} data username and password of user
 * @returns
 */
export const login = async (data) => {
  const url = new URL(`${env.urlServer}/users?`);
  Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
  const response = await fetch(url);
  return await response.json();
}

/**
 * Service for change info user
 * @param {*} data data of user for update
 * @param {*} id id user for update
 * @returns 
 */
export const changeInfoUser = async (data, id) => {
  const url = `${env.urlServer}/users/${id}`;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  const response = await fetch(url, requestOptions);
  return await response.json();
}
