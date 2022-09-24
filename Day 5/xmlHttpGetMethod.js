let apiurl = "https://jsonplaceholder.typicode.com/users";
let xhr = new XMLHttpRequest();
xhr.open("GET", apiurl, true);
xhr.onload = function () {
  let users = JSON.parse(xhr.responseText);
  if (xhr.status == 200) {
    formatData(users);
  } else {
    console.log(users);
  }
};
xhr.send();

function createElementByTag(tagName) {
  return document.createElement(tagName);
}

function formatData(users) {
  let input1 = createElementByTag("input");
  let input2 = createElementByTag("input");
  let input3 = createElementByTag("input");
  let btnUpdate = createElementByTag("button");

  btnUpdate.innerHTML = "Update";
  for (let i in users) {
    let trNode = createElementByTag("tr");
    let tdNode1 = createElementByTag("td");
    let tdNode2 = createElementByTag("td");
    let tdNode3 = createElementByTag("td");
    let tdNode4 = createElementByTag("td");
    let tdNode5 = createElementByTag("td");
    let btnEdit = createElementByTag("button");
    let btnDelete = createElementByTag("button");
    btnEdit.innerHTML = "Edit";
    btnDelete.innerHTML = "Delete";

    tdNode1.innerHTML = users[i]["id"];
    tdNode2.innerHTML = users[i]["name"];
    tdNode3.innerHTML = users[i]["username"];
    tdNode4.innerHTML = users[i]["email"];

    tdNode5.appendChild(btnEdit);
    tdNode5.appendChild(btnDelete);

    trNode.appendChild(tdNode1);
    trNode.appendChild(tdNode2);
    trNode.appendChild(tdNode3);
    trNode.appendChild(tdNode4);
    trNode.appendChild(tdNode5);

    btnEdit.onclick = function () {
      input1.value = users[i]["name"];
      input2.value = users[i]["username"];
      input3.value = users[i]["email"];
      document.body.appendChild(input1);
      document.body.appendChild(input2);
      document.body.appendChild(input3);
      document.body.appendChild(btnUpdate);
    };

    //Delete operation
    // btnDelete.onclick = function () {
    //   xhr.open("DELETE", apiurl + "/" + i, true);
    //   xhr.setRequestHeader("Content-type", "application/json");
    //   xhr.onload = function () {
    //     let users = JSON.parse(xhr.responseText);
    //     if (xhr.status == 200) {
    //       console.log("deleted");
    //     }
    //   }
    //   xhr.send();
    // }

    document.getElementById("tableBody").appendChild(trNode);
  }
}
