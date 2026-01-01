const apiUrl = 'https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties';

export function getAllFaculties(setData) {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => setData(res));
}
