const JsonData = fetch("./data.json")
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log("JsonData", data); 
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});


function userInputs(){
  const userInputs = document.getElementById("comment").value;
  // console.log("user Comments",userInputs)
  let div = document.createElement("div");
  let h6 = document.createElement("h6");
  h6.textContent = userInputs;
  div.appendChild(h6);
  let container = document.querySelector(".comments-container");
  container.appendChild(div);
}