document.getElementById('externalBtn').addEventListener('click', function() {
    var contentDiv = document.getElementById('dynamicContent');
    contentDiv.innerHTML = 'This content was changed by external JavaScript!';
    contentDiv.classList.add('bg-success', 'text-white');
  });