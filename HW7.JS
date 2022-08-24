const root = document.querySelector("#root");
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await res.json();
  user.forEach((user, index) => {
    root.innerHTML += `<tr>
    <th class="id" scope="row">${user.id}</th>
    <td class="name">${user.name}</td>
    <td class="username">${user.username}</td>
    <td class="email">${user.email}</td>
  </tr>`;
  });
}
getUsers();
