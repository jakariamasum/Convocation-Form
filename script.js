    document.getElementById('convocationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Create an empty object to store form data
        var formData = {};

        // Iterate over form elements
        var formElements = this.elements;
        for (var i = 0; i < formElements.length; i++) {
            var element = formElements[i];
            // Check if the element is an input, select, or textarea and has a name attribute
            if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
                if (element.name) {
                    // Add the element's value to the formData object with its name as key
                    formData[element.name] = element.value;
                }
            }
        }

        // If you want to log the collected data to the console
        console.log(formData);

        // Now you can do whatever you want with the collected data
        // For example, you can send it to your server via AJAX
    });
