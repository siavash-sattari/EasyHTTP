let http = new EasyHTTP();

// Get All Posts

http.getPosts("https://jsonplaceholder.typicode.com/posts", function (error, posts) {
  if (error) {
    console.log(error);
  } else {
    console.log(posts);
  }
});

// Get Single Post

http.getPosts("https://jsonplaceholder.typicode.com/posts/2", function (error, post) {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});

// ADD Post

let data1 = {title: "Custom Post", body: "This Is Custom Post"};
http.Post("https://jsonplaceholder.typicode.com/posts", data1, function (error, post) {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});

// Update Post

let data2 = {title: "Custom Post Two", body: "This Is Custom Post Two"};
http.Put("https://jsonplaceholder.typicode.com/posts/2", data2, function (error, post) {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});

// Delete Post

http.delete("https://jsonplaceholder.typicode.com/posts/2", function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
