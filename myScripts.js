
document.addEventListener('DOMContentLoaded', function() {
    const mainSearchBar = document.getElementById('main-search-bar');
    const searchBarAdd = document.getElementById('search-bar-add');
    let overlay;

    function showSearchBarAdd() {
        // Create and add overlay
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        // Show search-bar-add
        searchBarAdd.classList.remove('hidden');
    }

    function hideSearchBarAdd() {
        // Remove overlay
        if (overlay) {
            overlay.remove();
        }

        // Hide search-bar-add
        searchBarAdd.classList.add('hidden');
    }

    mainSearchBar.addEventListener('click', function(event) {
        event.stopPropagation();
        showSearchBarAdd();
    });

    // Hide search-bar-add when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchBarAdd.contains(event.target) && !mainSearchBar.contains(event.target)) {
            hideSearchBarAdd();
        }
    });

    // Prevent hiding when clicking inside search-bar-add
    searchBarAdd.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// ------ map ------ 



// //  ------ map  && calender ------ 





// worked ----- **** 

document.addEventListener('DOMContentLoaded', function() {
    const whereInput = document.getElementById('where-btn');
    const regionDropdown = document.getElementById('region-dropdown');
    const regionOptions = document.querySelectorAll('.region-option');
    const otherInputs = document.querySelectorAll('#checkin-btn, #checkout-btn, #guests-btn');
    const checkinInput = document.getElementById('checkin-btn');
    const checkoutInput = document.getElementById('checkout-btn');
    const searchBar = document.getElementById('search-bar-add');

    // Prevent propagation for Flatpickr calendar
    const preventPropagation = (element) => {
        element.addEventListener('click', (e) => e.stopPropagation());
    };

    // Flatpickr configuration
    const flatpickrConfig = {
        minDate: "today",
        dateFormat: "Y-m-d",
        clickOpens: true,
        onClose: function(selectedDates, dateStr, instance) {
            searchBar.classList.remove('hidden');
        },
        onReady: function(selectedDates, dateStr, instance) {
            preventPropagation(instance.calendarContainer);
        }
    };

    // Initialize Flatpickr for check-in and check-out dates
    const checkinPicker = flatpickr(checkinInput, {
        ...flatpickrConfig,
        onChange: function(selectedDates, dateStr) {
            checkoutPicker.set('minDate', dateStr);
        }
    });

    const checkoutPicker = flatpickr(checkoutInput, flatpickrConfig);

    // Where input and region dropdown logic
    whereInput.addEventListener('click', function(event) {
        event.stopPropagation();
        regionDropdown.classList.toggle('hidden');
    });

    regionOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedRegion = this.getAttribute('data-region');
            whereInput.value = selectedRegion;
            regionDropdown.classList.add('hidden');
        });
    });

    // Close dropdown when clicking on other input fields
    otherInputs.forEach(input => {
        input.addEventListener('click', function() {
            regionDropdown.classList.add('hidden');
        });
    });

    // Close dropdown when clicking outside and ensure search bar visibility
    document.addEventListener('click', function(event) {
        if (!whereInput.contains(event.target) && !regionDropdown.contains(event.target) && 
            !event.target.contains('.flatpickr-calendar')) {
            regionDropdown.classList.add('hidden');
        }
        
        // Ensure search bar stays visible
        searchBar.classList.remove('hidden');
    });

    // Additional logic for guests input and search button can be added here
});




// end worked ----- ****** 




