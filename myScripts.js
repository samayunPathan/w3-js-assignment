
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


document.addEventListener('DOMContentLoaded', function() {
    const whereInput = document.getElementById('where-btn');
    const regionDropdown = document.getElementById('region-dropdown');
    const regionOptions = document.querySelectorAll('.region-option');
    const otherInputs = document.querySelectorAll('#checkin-btn, #checkout-btn, #guests-btn');

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

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!whereInput.contains(event.target) && !regionDropdown.contains(event.target)) {
            regionDropdown.classList.add('hidden');
        }
    });
});
// //  ------ calender ------ 


// document.addEventListener('DOMContentLoaded', function() {
//     const mainSearchBar = document.getElementById('main-search-bar');
//     const searchBarAdd = document.getElementById('search-bar-add');
//     const checkinInput = document.getElementById('checkin');
//     const checkoutInput = document.getElementById('checkout');
//     let overlay;

//     function showSearchBarAdd() {
//         overlay = document.createElement('div');
//         overlay.classList.add('overlay');
//         document.body.appendChild(overlay);
//         searchBarAdd.classList.remove('hidden');
//     }

//     function hideSearchBarAdd() {
//         if (overlay) {
//             overlay.remove();
//         }
//         searchBarAdd.classList.add('hidden');
//     }

//     mainSearchBar.addEventListener('click', function(event) {
//         event.stopPropagation();
//         showSearchBarAdd();
//     });

//     document.addEventListener('click', function(event) {
//         if (!searchBarAdd.contains(event.target) && !mainSearchBar.contains(event.target)) {
//             hideSearchBarAdd();
//         }
//     });

//     searchBarAdd.addEventListener('click', function(event) {
//         event.stopPropagation();
//     });

//     // Initialize Flatpickr for check-in and check-out inputs
//     const checkinPicker = flatpickr(checkinInput, {
//         minDate: "today",
//         onChange: function(selectedDates, dateStr) {
//             checkoutPicker.set('minDate', dateStr);
//         }
//     });

//     const checkoutPicker = flatpickr(checkoutInput, {
//         minDate: "today",
//     });

//     // Store selected dates
//     let selectedDates = {
//         checkin: null,
//         checkout: null
//     };

//     checkinPicker.config.onChange.push(function(selectedDates, dateStr) {
//         selectedDates.checkin = dateStr;
//     });

//     checkoutPicker.config.onChange.push(function(selectedDates, dateStr) {
//         selectedDates.checkout = dateStr;
//     });

//     // Example of how to use the stored dates
//     document.getElementById('search-btn-add').addEventListener('click', function() {
//         console.log('Selected dates:', selectedDates);
//         // Here you can use the selectedDates object for further processing
//     });
// });

// // ------ end calender -----

