// Example suggestions for demonstration
const suggestions = [
    "Daniels Pizza",
    "DanielSearch tutorials",
    "DanielSearch homepage",
    "DanielSearch search engine",
    "DanielSearch help"
];

// Get references to DOM elements
const searchBar = document.querySelector('.search-bar');
const suggestionBox = document.createElement('div'); // Create suggestion box

// Add the suggestion box under the search bar
suggestionBox.classList.add('suggestion-box');
document.body.appendChild(suggestionBox);

// Event listener to show suggestions as the user types
searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    suggestionBox.innerHTML = ''; // Clear previous suggestions
    if (query) {
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.addEventListener('click', function() {
                searchBar.value = suggestion; // Set the input to the selected suggestion
                suggestionBox.innerHTML = ''; // Hide suggestions after selection
            });
            suggestionBox.appendChild(suggestionItem);
        });
    }
});

// Close the suggestion box when the user clicks outside
document.addEventListener('click', function(e) {
    if (!suggestionBox.contains(e.target) && e.target !== searchBar) {
        suggestionBox.innerHTML = '';
    }
});

// Optionally, allow navigating with keyboard (up/down arrows and Enter)
searchBar.addEventListener('keydown', function(e) {
    const suggestionItems = document.querySelectorAll('.suggestion-item');
    if (e.key === 'ArrowDown' && suggestionItems.length > 0) {
        // Focus the first suggestion
        suggestionItems[0].classList.add('highlight');
    } else if (e.key === 'ArrowUp') {
        // Navigate upwards through suggestions (if needed)
        suggestionItems[0]?.classList.remove('highlight');
    } else if (e.key === 'Enter') {
        // Submit form with selected suggestion
        document.querySelector('.search-form').submit();
    }
});
