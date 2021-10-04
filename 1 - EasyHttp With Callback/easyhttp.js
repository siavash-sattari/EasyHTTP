class EasyHTTP {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  // Make An HTTP Request By GET - Need URL

  getPosts(url, callback) {
    this.xhr.open("GET", url, true);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, JSON.parse(this.xhr.responseText));
      } else {
        callback(`Error : ${this.http.status}`);
      }
    };
    this.xhr.send();
  }

  // Make An HTTP Request By POST - Need URL & DATA

  Post(url, data, callback) {
    this.xhr.open("POST", url, true);
    this.xhr.setRequestHeader("content-type", "application/json");
    this.xhr.onload = () => {
      // 201 status code means : CREATED
      if (this.xhr.status === 201) {
        callback(null, JSON.parse(this.xhr.responseText));
      } else {
        callback(`Error : ${this.xhr.status}`);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  // Make An HTTP Request By PUT - Need URL & DATA

  Put(url, data, callback) {
    this.xhr.open("PUT", url, true);
    this.xhr.setRequestHeader("content-type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, JSON.parse(this.xhr.responseText));
      } else {
        callback(`Error : ${this.xhr.status}`);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  // Make An HTTP Request By DELETE - Need URL

  delete(url, callback) {
    this.xhr.open("DELETE", url, true);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, "Post Deleted ... !");
      } else {
        callback(`Error : ${this.xhr.status}`);
      }
    };
    this.xhr.send();
  }
}
