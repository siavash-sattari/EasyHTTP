let http = new EasyHTTP();

// Get All Users  -------------------------------------

http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

// Get Single User ------------------------------------

http
  .get("https://jsonplaceholder.typicode.com/users/5")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// ADD User -------------------------------------------

let user1 = {name: "Scott", lastname: "Johnson", email: "example@gmail.com"};

http
  .post("https://jsonplaceholder.typicode.com/users", user1)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Update User ----------------------------------------

let user2 = {name: "Scott", lastname: "Johnson", email: "example@gmail.com"};

http
  .put("https://jsonplaceholder.typicode.com/users/5", user2)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Delete Post ----------------------------------------

let user = {name: "Scott", lastname: "Johnson", email: "example@gmail.com"};

http
  .delete("https://jsonplaceholder.typicode.com/users/5")
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
