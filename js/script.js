//filtered = document.querySelector(".filtered");
//filterarray = [];

/*filtered.addEventListener('input', (e) => {
  const val = e.target.value;
  console.log(val);
  //filterarray.filter((c) => {
    //console.log(c.innerText);
    //console.log("prev" + c.innerHTML);
    //c.classList.add('abc');


   // c.innerText.toLowerCase().includes(val.toLowerCase()) ?
    //  c.classList.remove('hide') :
    //  c.classList.add('hide')
    // console.log(c.classList); 
    // console.log("later"+c.innerHTML); 
  } 
  ) 
//})*/

function getandupdate() {
  console.log("loading getand update fun...");
  tit = document.getElementById('title').value;
  desc = document.getElementById('description').value;
  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

  }
  else {

    itemJsonArraystr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.push([tit, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }

  update();
}

function update() {
  if (localStorage.getItem('itemsJson') == null) {

    itemJsonArray = [];
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }
  else {
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  // Populate the table
  let addentry = document.getElementById("tablebody");
   let str=[];
  itemJsonArray.forEach((element, index) => {
    console.log(itemJsonArray[index]);
    console.log("populating..");
     //tr = document.createElement('tr');
    // tr.innerText='CHECK';
    //console.log(  tr);
    //filterarray.push();
    str+= `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn-light" onclick=deleted(${index})>Delete</button></td>
        </tr>
      `;
    //console.log((index+1) + tr.innerText + tr.innerHTML);
    
    
    
    
  });


  addentry.innerHTML=str;
  console.log(addentry.innerHTML);
}

addnote = document.getElementById("addnote");

addnote.addEventListener("click", getandupdate);
update();

function deleted(pos) {
  if (confirm("Do you really want to delete the note ?")) {
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(pos, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    
    update();
  }
  else
    return;
}
function clearlist() {
  if (confirm("Do you really want to clear all your notes ?")) {
    console.log('Clearing the storage')
    localStorage.clear();
    update();
  }
}
