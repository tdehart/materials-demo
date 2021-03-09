/**
 * Returns data from backend or throws an error
 * @param   {string} route backend route endpoint
 * @return  {Object|Object[]} backend response
 * @throws  {error} throws error with status code and status text error
 */
export default async function getData(route) {
  try {
    const response = await fetch(`api/${route}`, {
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    return null;
  }
}
