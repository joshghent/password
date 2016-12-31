const request = (url, callback, callbackArgs) => {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    // When the request has finished
    if (xhr.readyState === 4) {
      // Check if it was successful
      if (xhr.status === 200) {
        callback(xhr.responseText, callbackArgs);
      } else {
        console.error('There was an issue. The code goblins are on it!');
      }
    }
  }

  xhr.open('GET', url, true);
  xhr.send(null);

  // Return the XMLHttpRequest object
  // This is so we can cancel it in the future
  return xhr;
}

// Gets the number of words the user has selected in the dropdown
// This will be how many words the password is
const getNumberOfWordsSelected = () => {
  return document.getElementById('numberOfWords').value;
}

// Callback for the API call
// It takes the data and populates the password input
const populatePasswordField = (data) => {
  data = JSON.parse(data);

  document.getElementById('password').value = data.password;
}

const buildAPIUrl = () => {
  let url = document.location.href + getNumberOfWordsSelected();

  const mixCasing = document.getElementById('mixCasing').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSpecialChars = document.getElementById('includeSpecialChars').checked;
  
  url += '?mixCasing=' + mixCasing + '&includeNumbers=' + includeNumbers + '&includeSpecialChars=' + includeSpecialChars;

  return url;
}

// Calls the generate password API
// Called onload and when the generate password button is clicked
// It has a callback of populatePasswordField
const getNewPassword = () => {
  request(buildAPIUrl(), populatePasswordField);
}

window.onload = () => {
  // Onload get a new password
  getNewPassword();

  const copyPassword = new Clipboard('#copyPassword');
  copyPassword.on('success', (e) => {

    document.getElementById('copyPassword').value = "Copied!";
    document.getElementById('copyPassword').classList.toggle('successBtn');

    setTimeout(() => {
      document.getElementById('copyPassword').value = "Copy to Clipboard";
      document.getElementById('copyPassword').classList.toggle('successBtn');
    }, 700);
  });

  // Add a click handler to the new password button
  // This will generate a new password everytime the button is clicked
  document.getElementById('newPassword').addEventListener('click', getNewPassword);
}