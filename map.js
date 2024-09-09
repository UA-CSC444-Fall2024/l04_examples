var objects = [{foo: 3, bar: "abc"},
               {foo: 5, bar: "def"}];

function map(lst, f) {
  var lst2 = [];
  for (var i=0; i<lst.length; i++) {
    lst2.push(f(lst[i]));
  }
  return lst2;
}






























































function g1(a) {
  //console.log(a["foo"]);
}

function f1(a) {
  return map(a,g1);
}

f1(objects);



function g2(a) {
  return a["foo"];
}

function f2(a) {
  return map(a,g2);
}

f2(objects);
