// Define an object to map the status to its properties
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Select all elements with an id starting with 'book'
const books = document.querySelectorAll("[id^='book']");

// Define a function to update the status of a book
const updateBookStatus = (book) => {
    // Get the status, reserve, checkout, and checkin elements within the book
    const status = book.querySelector('.status');
    const reserve = book.querySelector('.reserve');
    const checkout = book.querySelector('.checkout');
    const checkin = book.querySelector('.checkin');

    // Get the current status text and trim any whitespace
    const currentStatus = status.innerText.trim();

    // Retrieve the status information from the STATUS_MAP object
    const statusInfo = STATUS_MAP[currentStatus];

    // Update the color of the status element based on the color value from the status information
    status.style.color = statusInfo.color;

    // Update the disabled state of the reserve button based on the canReserve property from the status information
    reserve.disabled = !statusInfo.canReserve;

    // Update the disabled state of the checkout button based on the canCheckout property from the status information
    checkout.disabled = !statusInfo.canCheckout;

    // Update the disabled state of the checkin button based on the canCheckIn property from the status information
    checkin.disabled = !statusInfo.canCheckIn;
}

// Call the updateBookStatus function for each book element
books.forEach(updateBookStatus);