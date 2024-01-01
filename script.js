document.addEventListener("DOMContentLoaded", function () {
  var changingTextSpans = document.querySelectorAll(".hero .h1s .special span");
  var words = ["website", "business", "setup", "product"];
  var index = 0;

  function changeWord() {
    changingTextSpans.forEach(function (span) {
      span.style.opacity = 0;
    });

    setTimeout(function () {
      changingTextSpans.forEach(function (span) {
        span.textContent = words[index];
        span.style.opacity = 1;
      });
      index = (index + 1) % words.length;
    }, 500); // Change after a brief delay (adjust as needed)

    setTimeout(changeWord, 1500); // Repeat every 1.5 seconds (adjust as needed)
  }

  changeWord();
});
