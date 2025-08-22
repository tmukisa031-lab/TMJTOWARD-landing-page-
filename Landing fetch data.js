fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.querySelector("h1").innerText = data.title;
  });