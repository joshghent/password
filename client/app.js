const request = (url, callback, callbackArgs) => {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(xhr.responseText, callbackArgs);
      } else {
        console.error('There was an issue. The code goblins are on it!');
      }
    }
  }

  xhr.open('GET', url, true);
  xhr.send(null);

  return xhr;
}

const getNumberOfWordsSelected = () => {
  return document.getElementById('numberOfWords').value;
}

const populatePasswordField = (data) => {
  data = JSON.parse(data);

  document.getElementById('password').value = data.password;
}

const getNewPassword = () => {
  const url = document.location.href + getNumberOfWordsSelected();
  request(url, populatePasswordField);
}

window.onload = () => {
  getNewPassword();

  document.getElementById('newPassword').addEventListener('click', getNewPassword);
}