var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);

function updateinput() {
  var sum = "" + $(".questions-text-alignment").html()
  var parser = new Parser();

  sum = sum.replace(/ /g, '').split("=")[0];
  console.log(sum);

  sum = sum.replace("x", "*");
  sum = sum.replace("÷", "/");

  var answer = parser.parse(sum).evaluate();


  $(".questions-input-adjustment")[0].dispatchEvent(new Event("input", { bubbles: true }));
  document.dispatchEvent(new Event("input", { bubbles: true }));
  document.execCommand("insertText", false, answer );

  console.log(answer);
}

var checkExist = setInterval(function () {
  if ($('.questions-text-alignment').length) {
    console.log("Exists!");
    clearInterval(checkExist);
  }
}, 100);

function handleKeypress(e) {
  var code = e.which;
  if (code == 13) {
    updateinput();
  }
}


document.addEventListener("keypress", handleKeypress, false);

