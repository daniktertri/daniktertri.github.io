document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.bottom-menu a');
    const sections = document.querySelectorAll('.container');
  
    // Sample leaderboard data
    const leaderboardData = [
      { name: 'Alice', score: 120 },
      { name: 'Bob', score: 95 },
      { name: 'Charlie', score: 85 },
      { name: 'Diana', score: 70 },
      { name: 'Eve', score: 50 },
    ];
  
    // Function to display the correct section
    function showSection(sectionId) {
      sections.forEach((section) => {
        if (section.id === sectionId) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
  
      // Update active link
      menuLinks.forEach((link) => {
        if (link.dataset.section === sectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  
    // Event listener for navigation
    menuLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.dataset.section;
        showSection(sectionId);
      });
    });
  
    // Populate leaderboard
    function populateLeaderboard() {
      const leaderboardTable = document.querySelector('#leaderboard tbody');
      leaderboardTable.innerHTML = ''; // Clear existing rows
  
      leaderboardData
        .sort((a, b) => b.score - a.score) // Sort by score descending
        .forEach((user, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.score}</td>
          `;
          leaderboardTable.appendChild(row);
        });
    }
  
    // Initialize the app
    showSection('mining'); // Show the Mining section by default
    populateLeaderboard(); // Populate leaderboard on load
  });
  
