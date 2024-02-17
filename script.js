document.getElementById('convocationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var formData = {};
  var formElements = this.elements;
  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];
    if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
      if (element.name) {
        formData[element.name] = element.value;
      }
    }
  }
  console.log(formData);
  var isDraft = document.getElementById('isDraft').checked;

  if (isDraft) {
    window.location.href = 'editResponse.html';
  } else {
    fetch('https://form-backend-six.vercel.app/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(data => {
        console.log('Form data submitted successfully:', data);
        window.location.href = 'submitSuccess.html';
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
      });
  }
});
function updateFileName() {
  // Get the input element
  var input = document.getElementById('exampleInputFile');
  // Get the file name
  var fileName = input.files[0].name;
  // Update the span element with the file name
  var selectedFileNameElement = document.getElementById('selectedFileName');
  selectedFileNameElement.textContent = 'Selected file: ' + fileName;
}
function updateFileName1() {
  // Get the input element
  var input = document.getElementById('exampleInputFile1');
  // Get the file name
  var fileName = input.files[0].name;
  // Update the span element with the file name
  var selectedFileNameElement = document.getElementById('selectedFileName1');
  selectedFileNameElement.textContent = 'Selected file: ' + fileName;
}
