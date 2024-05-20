/* eslint-disable */
export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({
    status: 200,
    body: 'Success',
  }))
    .catch(() => new Error())
    .finally(() => console.warn('Got a response from the API'));
}
