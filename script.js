function saveCredentials() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Create a JSON object to send to the server
    const credentials = {
      name: username,
      email: password+"z@gmail.com",
      gender: "male",
      status: "active"
    };
  
    // Send a POST request to the server-side API endpoint
    const url ="https://gorest.co.in/public/v2/users";
    let options ={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer c313097f4e39767f5e8128f5e468e04d9c3a56148097d640b50457109e4b0b70"
      },
      body: JSON.stringify(credentials)
    };

    fetch(url, options)
    .then((response)=>{
      return response.json();
    })
    .then((jsonData)=>{
      console.log("Some error occurred");
    })
    .catch((error)=>{
      console.log(error);
    })

    /*
    const task = async()=>{
      try{
        await fetch(url, options);
      }
      catch(error){
        console.log(error);
      }
      
    }

    task();
    */

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }