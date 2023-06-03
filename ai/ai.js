// Add an event listener to the contextmenu event on the document
document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Prevent the default context menu from appearing

  // Create a new context menu
  var contextMenu = document.createElement('div');
  contextMenu.id = 'context-menu';
  contextMenu.innerHTML = '<ul><li id="open-chat">Open Chat</li></ul>';

  // Position the context menu where the right-click event occurred
  contextMenu.style.top = event.clientY + 'px';
  contextMenu.style.left = event.clientX + 'px';

  // Add the context menu to the document body
  document.body.appendChild(contextMenu);

  // Add a click event listener to the 'Open Chat' option
  var openChatOption = document.getElementById('open-chat');
  openChatOption.addEventListener('click', function() {
    window.location.href = 'chat.html'; // Redirect to chat.html
  });

  // Remove the context menu when clicking outside of it
  document.addEventListener('click', function() {
    document.body.removeChild(contextMenu);
  });
});
