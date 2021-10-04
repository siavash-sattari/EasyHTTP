class EasyHTTP {
  // Make An HTTP Request By GET - Need URL

  async get(url) {
    let response = await fetch(url);
    let users = await response.json();
    return users;
  }

  // Make An HTTP Request By POST - Need URL & DATA

  async post(url, data) {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let user = await response.json();
    return user;
  }

  // Make An HTTP Request By PUT - Need URL & DATA

  async put(url, data) {
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let user = await response.json();
    return user;
  }

  // Make An HTTP Request By DELETE - Need URL

  async delete(url) {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    let resData = await "User Deleted ... ";
    return resData;
  }
}