function result(num) {
  document.getElementById("result").value += num;
}
function solve() {
  var a = document.getElementById("result").value;
  var b = eval(a);
  document.getElementById("result").value = b;
}
function clean() {
  document.getElementById("result").value = "";
}
