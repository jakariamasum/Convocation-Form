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
    fetch('http://localhost:3000/submitForm', {
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
