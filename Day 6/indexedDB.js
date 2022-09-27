let openRequest = indexedDB.open("studentDB");
console.log(openRequest);

let db, studentStore;
openRequest.onsuccess = (event) => {
  console.log(event);
  db = event.target.result;
};

openRequest.onerror = (event) => {
  console.log(event.target.errorCode);
};

openRequest.onupgradeneeded = (event) => {
  const studentData = [
    { id: 1, name: "Rick", age: 18 },
    { id: 2, name: "Nick", age: 38 },
    { id: 3, name: "John", age: 48 },
    { id: 4, name: "Peter", age: 28 },
  ];
  db = event.target.result;
  studentStore = db.createObjectStore("students", { keyPath: "id" });

  for (let index in studentData) {
    studentStore.add(studentData[index]);
  }
};

function addRecord() {
  let uid = document.getElementById("id").value;
  let uname = document.getElementById("name").value;
  let uage = document.getElementById("age").value;

  let request = db
    .transaction(["students"], "readwrite")
    .objectStore("students")
    .add({ id: uid, name: uname, age: uage });

  request.onsuccess = () => {
    alert("Data is added");
  };

  request.onerror = () => {
    alert("Error while adding the data");
  };
}

function showRecord() {
  let allRecord = db.transaction(["students"]).objectStore("students");

  allRecord.openCursor().onsuccess = (event) => {
    let eachRecord = event.target.result;
    if (eachRecord) {
      let data = ` ID = ${eachRecord.value.id} <br> Name = ${eachRecord.value.name}<br>${eachRecord.value.age}`;
      document.write(data + "<br>");
      eachRecord.continue();
    } else {
      alert("No More Records");
    }
  };
}

function deleteRecord() {
  let request = db
    .transaction(["students"], "readwrite")
    .objectStore("students")
    .delete(4);

  request.onsuccess = () => {
    alert("Data is deleted");
  };

  request.onerror = () => {
    alert("Error while deleting the data");
  };
}