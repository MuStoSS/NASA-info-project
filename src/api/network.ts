/**
 * Отправляет запрос.
 * @param url - Адрес запроса.
 * return - Promise.
 */
export async function sendRequest(url: string): Promise<any> {
  let fetchingUrl = url;
  if (url.startsWith('/')) {
    fetchingUrl = `https://api.nasa.gov${url}?api_key=r0gp4ff0D7wlnSjetsblcNjMFxyumI37v1Cid7xD`;
  }
  const response = await fetch(fetchingUrl);
  return await response.json();
}