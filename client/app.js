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

// Calls the generate password API
// Called onload and when the generate password button is clicked
// It has a callback of populatePasswordField
const getNewPassword = () => {
  const url = document.location.href + getNumberOfWordsSelected();
  request(url, populatePasswordField);
}

window.onload = () => {
  // Onload get a new password
  getNewPassword();

  // Add a click handler to the new password button
  // This will generate a new password everytime the button is clicked
  document.getElementById('newPassword').addEventListener('click', getNewPassword);
}