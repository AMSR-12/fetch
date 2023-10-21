let parent = document.getElementById("list-container")

fetch("https://jsonplaceholder.typicode.com/comments")
.then((response)=>response.json())
.then((data)=>{
  data.map((item)=>{
    let list =document.createElement("li");
    list.innerText = `Name:${item.name} Email:${item.email} Comment:${item.body}`
    parent .appendChild(list)
  })
});
  
  