export const getUsers = () =>
  fetch("https://api.github.com/users").then(
    (response) => response.json() // получение данных в виде массива
  );
