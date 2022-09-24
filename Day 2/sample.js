let $ = function (id) {
  return document.getElementById(id);
};

let showTotal = function () {
  tmp = document.getElementsByClassName("sal");
  console.log(tmp);
  let res = 0;
  for (let val of tmp) {
    res += parseInt(val.innerHTML);
  }

  $("result").innerHTML = res;
};


let func = function () {
  let l = $("letters").value;
  document.getElementById("letters").value = l.toUpperCase();
};