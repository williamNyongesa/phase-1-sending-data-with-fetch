function submitData() {
    const userData = {
      name: "Steve",
      email: "steve@steve.com",
    };
  
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      const newId = data.id;
      // Append the new id to the DOM
      const idElement = document.createElement("p");
      idElement.textContent = `New ID: ${newId}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // Handle the failed POST request and append the error message to the DOM
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
  }
  
  submitData();
  