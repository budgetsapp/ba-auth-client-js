export const get = fullUrl => {
  return fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
};

export async function post(fullUrl, data) {
  const response = await fetch(fullUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}
