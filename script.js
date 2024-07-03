function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element
    const form = document.getElementById('form1');

    // Get the values of first name and last name from the form inputs
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the values using an alert
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}
