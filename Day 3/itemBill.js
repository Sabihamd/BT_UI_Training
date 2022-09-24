let $ = function (id) {
  return document.getElementById(id);
};
let itemsarray = [];

function addItem() {
  let icode = $("code").value;
  let iname = $("name").value;
  let icost = parseInt($("cost").value);
  let iquan = parseInt($("quantity").value);
  if (icode == null || iname == null || icost == null || iquan == null) {
    alert("Please enter all fields");
  } else {
    let items = [];
    items.push(icode);
    items.push(iname);
    items.push(icost);
    items.push(iquan);
    items.push(iquan * icost);
    itemsarray.push(items);
    showItems();
    showSubtotal();
  }
}

function showItems() {
  let st1 = "";
  let st2 = "";
  let st3 = "";
  let st4 = "";
  let st5 = "";
  for (let i = 0; i < itemsarray.length; i++) {
    for (let j = 0; j < 5; j++) {
      // console.log(itemsarray[i][j])
      let tmp = itemsarray[i][j];
      // console.log(tmp)
      if (j == 0) {
        st1 += tmp + "\n";
      } else if (j == 1) {
        st2 += tmp + "\n";
      } else if (j == 2) {
        st3 += tmp + "\n";
      } else if (j == 3) {
        st4 += tmp + "\n";
      } else {
        st5 += tmp + "\n";
      }
    }

    $("code1").value = st1;
    $("name1").value = st2;
    $("cost1").value = st3;
    $("quantity1").value = st4;
    $("linecost").value = st5;
  }

  $("code").value = "";
  $("name").value = "";
  $("cost").value = "";
  $("quantity").value = "";
}

function showSubtotal() {
  let s = 0;
  for (let i = 0; i < itemsarray.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (j == 4) {
        s += itemsarray[i][j];
      }
    }
  }
  $("subtotal").value = s;
  let sub = parseInt($("subtotal").value);
  $("tax").value = sub * 0.07;
  let stax = parseInt($("tax").value);
  $("total").value = sub + stax;
}
