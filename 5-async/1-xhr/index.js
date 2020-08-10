function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open("get", url, true);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    if(xhr.readyState == 4) {
      if(xhr.status >= 200 && xhr.status <= 299) {
        successCallback(xhr.responseText);
      } else {
        errorCallback();
      }
    }
  }
  xhr.onerror = function() {
    console.log("network error");
    errorCallback();  
  }
  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
