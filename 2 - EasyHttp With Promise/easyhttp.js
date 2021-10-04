class EasyHTTP {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  // Make An HTTP Request By GET - Need URL

  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
 
  // Make An HTTP Request By POST - Need URL & DATA

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make An HTTP Request By PUT - Need URL & DATA

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make An HTTP Request By DELETE - Need URL

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then(() => resolve("User Deleted ... "))
        .catch((err) => reject(err));
    });
  }
}
