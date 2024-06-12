document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Show loading indicator
  document.getElementById('loading').style.display = 'block';

  // Simulate a login request
  setTimeout(function() {
      // Hide loading indicator
      document.getElementById('loading').style.display = 'none';

      // Show success message
      document.getElementById('message').style.display = 'block';
      document.getElementById('message').textContent = 'Login successful!';

      // Redirect to dashboard page after 2 seconds
      setTimeout(function() {
          window.location.href = 'dashboard.html';
      }, 2000);
  }, 2000); // Simulate a 2-second loading 
});
document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
