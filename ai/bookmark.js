javascript:(function() {
  var chatziBuddyWindow = window.open('', '_blank', 'width=500,height=500,resizable=yes');
  fetch('https://ub96.github.io/ai.html')
    .then(function(response) {
      return response.text();
    })
    .then(function(html) {
      chatziBuddyWindow.document.documentElement.innerHTML = html;
    });
})();
