// Get current date and time
const today = new Date();

// Extract date in format: MM/DD/YYYY
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const date = today.toLocaleDateString('en-US', options);

// Set the inner text of the h1 element to the current date
document.getElementById('date').innerText = date;
