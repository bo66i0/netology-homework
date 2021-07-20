export const fetchServices = async id => {
  let url = process.env.REACT_APP_API_URL;
  url += id ? `/${id}` : '';
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};