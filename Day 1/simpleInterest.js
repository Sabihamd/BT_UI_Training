let $ = function (id) {
  return document.getElementById(id);
};

let cal = function () {
  let p = parseInt($("amt").value);
  let t = parseInt($("rate").value);
  let r = parseInt($("time").value);
  res = (p * t * r) / 100;
  alert(res);
};
