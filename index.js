// Thought Process
// Grab all the elements
// Also grab the table element which will display the retrieved data later
// Create an empty object to hold the data values
// Add eventListener to the submit button
// Update the data objects with the values
// Add a variable to count the data
// Update the localStorage with the data and count
// Retrieve the data from the localStorage and store it in a variable
// Create a tr element to hold the tds we'll create later
// Create another tr element to hold the (ths) we'll also create later
// Assign both trs to different variables to distinguish them 
// Create (th) elements to display the table heads 
// Create the elements (tds) in which you will populate the retrieved data
// Append the (th) elements to their own created tr
// Append the elements (tds) to their tr created above

// New Thought Process
// Grab table created in the html
// Create a tr and th outside the for loop
// Append the tr to the table
// Inside the for loop, create a tr and as much need tds
// Append the tds to the tr
// Append the tr to the table

let form = document.getElementById('form');
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let age = document.getElementById('age');
let submit = document.getElementById('submit');
let table =  document.getElementById('table');
let data = {};
let count = 0;

submit.addEventListener('click', (event)=>{
    let firstName = fName.value;
    let lastName = lName.value;
    let years = age.value;

    // Update the data objects
    data = {firstName, lastName, age:years};
    // OR
    // data.firstName = firstName
    // data.lastName = lastName
    // data.age = years

    // Retrieve the previous count from the localStorage
    if(localStorage.getItem('count')){
        count = Number(localStorage.getItem('count'));
    }else{
        count = 0;
    }

    // Update the localStorage with the data and count
    localStorage.setItem(`data${count}`, JSON.stringify(data));

    count++
    localStorage.setItem('count', count);

    event.preventDefault();
})


// Creating a tr and th
let tr1 = document.createElement('tr');
tr1.setAttribute('class', 'tr1')

let th1 = document.createElement('th');
let th2 = document.createElement('th');   
let th3 = document.createElement('th');

// Populate the th with data
th1.innerText = 'First Names';
th2.innerText = 'Last Names';
th3.innerText = 'Age';

tr1.append(th1, th2, th3);
table.appendChild(tr1);

for(let i = 0; i < localStorage.length; i++){
    // Retrieve data from the local storage
    let retrievedData = JSON.parse(localStorage.getItem(`data${i}`));

    // Create table elements to hold the data values
    
    let tr2 = document.createElement('tr');
    tr2.setAttribute('class', 'tr2');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td2.setAttribute('id', 'td2');
    let td3 = document.createElement('td');

    
    // Populate the tds with the data values
    td1.innerHTML = retrievedData.firstName;
    td2.innerHTML = retrievedData.lastName;
    td3.innerHTML = retrievedData.age;
    
    tr2.append(td1,td2,td3);
    // Append the tds to the tr
    
    table.appendChild(tr2);
}
