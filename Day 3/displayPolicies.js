let $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  $("privacy").onchange = showSelection;
  $("user").onchange = showSelection;
  $("license").onchange = showSelection;
};

function showSelection() {
  let opts = "";
  if ($("privacy").checked) {
    tmp = $("privacy").value;
    opts += " Privacy Policy \n";
  }
  if ($("user").checked) {
    tmp2 = $("user").value;
    opts += " User Policy \n";
  }
  if ($("license").checked) {
    tmp3 = $("license").value;
    opts += " End User License \n";
  }
  if (opts.length != 0) {
    $("choice").value = opts;
  }
}
