window.addEventListener('DOMContentLoaded', function(event) {
    document.addEventListener('change', function(evt){
        console.log(evt.target.classList)
        if(evt.target.classList.contains('qty')){
            var button = evt.target.parentNode.querySelector('.buy-button')
            var qty = parseInt(evt.target.value)
            button.setAttribute('data-item-quantity', qty)
            var label = button.innerHTML
            label = label.replace(/\d+/, evt.target.value)
            if(qty > 1){
                label = label.replace(/copy/, "copies")
            }
            else{
                label = label.replace(/copies/, "copy")
            }
            button.innerHTML = label;
        }
    })
});

document.addEventListener("DOMContentLoaded", function() {
  const searchText = document.getElementById("searchText");
  const searchInput = document.getElementById("searchInput");

  searchText.addEventListener("click", expandSearchInput);
  searchInput.addEventListener("click", expandSearchInput);

  function expandSearchInput() {
    searchInput.classList.add("active");
    searchInput.focus();
    searchText.style.display = "none"; // Hide the "Search" text
  }

  searchInput.addEventListener("blur", function() {
    if (searchInput.value === "") {
      searchInput.classList.remove("active");
      searchText.style.display = "inline"; // Show the "Search" text again
    }
  });

  searchInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      executeSearch(searchInput.value);
    }
  });

  function executeSearch(query) {
    // Example of executing search task by redirecting to search results page with query parameter
    window.location.href = "/search?q=" + encodeURIComponent(query);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".buy-button");

  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      button.classList.add("added-to-cart");
      setTimeout(function() {
        button.classList.remove("added-to-cart");
      }, 1000); // Adjust the time in milliseconds as needed
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", function() {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", true);
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", false);
    }
  });
});
