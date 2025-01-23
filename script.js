function switchTab(tabName) {
    // Change content dynamically
    const content = document.getElementById('content');
    content.innerHTML = `<h1>${tabName}</h1><p>You selected the ${tabName} tab.</p>`;

    // Highlight the active tab
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
}
