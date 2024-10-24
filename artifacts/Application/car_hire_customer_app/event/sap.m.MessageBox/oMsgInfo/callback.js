//Preselect city
oInputSLocation.setValue("PAR - PARIS CITY, PARIS FRANCE")
oInputSLocationKey.setValue("PAR")

//Preselect all vehicles
// oCBSelectAll.setSelected(true);
// oCBSelectAll.fireSelect()

//Preselct Pick up and dropoff dateTime
const currentDate = new Date();

// Get the current date components
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
const year = currentDate.getFullYear();
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

// Pick up date and time (current date)
const pickUpDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

// Drop off date, add 1 day
const dropoffDate = new Date(currentDate); // Clone the current date object
dropoffDate.setDate(currentDate.getDate() + 1); // Add 1 day

// Get the dropoff date components
const dropoffDay = String(dropoffDate.getDate()).padStart(2, '0');
const dropoffMonth = String(dropoffDate.getMonth() + 1).padStart(2, '0'); // Ensure month is correct for transitions
const dropoffYear = dropoffDate.getFullYear(); // Ensure year is correct for transitions

// Drop off date and time
const dropOffDateTime = `${dropoffDay}-${dropoffMonth}-${dropoffYear} ${hours}:${minutes}:${seconds}`;


oDateTimePickerPickup.setValue(pickUpDateTime)
oDateTimePickerDropoff.setValue(dropOffDateTime);

