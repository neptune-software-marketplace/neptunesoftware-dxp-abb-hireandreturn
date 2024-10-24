var context = oEvent.oSource.getBindingContext();
var details = context.getObject();

console.log("Details: ",details);

//push image URL to next page
oImageVehicleRate.setSrc(details.imageUrl);

//push Title of car to next page
oTitleVehicleRateName.setText(details.name);

var classCode = details.classCode;
var rateCode = details.rateCode;

// var formattedDates = modeloMultiModelFormattedDateTime.getData();
// var formattedPickup = formattedDates.formattedPickup;
// var formattedDropff = formattedDates.formattedDropff;
// console.log("FPU:",formattedPickup);
// console.log("FDO:",formattedDropff);


//Date formatting on pickup&dropoff dates based on the DatePickers
function formatDate(dateString) {
   
    var date = new Date(dateString);

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 

    minutes = minutes < 10 ? '0' + minutes : minutes;

    return day + ' ' + months[monthIndex] + ' ' + year + ', ' + hours + ':' + minutes + ' ' + ampm;
}

var datePickup = oDateTimePickerPickup.getValue();
var dateDropOff = oDateTimePickerDropoff.getValue();

oTextVehicleRatePickupSelection.setText(datePickup);
oTextVehicleRateDropoffSelection.setText(dateDropOff);

// ----------------- Begin Setting the vehicle data ------------------------------

// function generateShortUUID() {
//     return 'xxxx-xxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random() * 16 | 0,
//             v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }

// var shortUUID = generateShortUUID();

//debugger;

var obj = {};

obj.id = details.id;
obj.brand = details.model;
obj.pickupLocationAddrLine1 = details.pickup_location.address.address_line_1;
obj.pickupLocationAddrLine2 = details.pickup_location.address.address_line_2;
obj.pickupLocationCity = details.pickup_location.address.city;
obj.pickupLocationCountry = details.pickup_location.address.country_code;
obj.pickupLocationPostCode = details.pickup_location.address.postal_code;
obj.pickupLocationHours = details.pickup_location.location.hours;
obj.pickupLocationName = details.pickup_location.location.name;
obj.pickupLocationTelephone = details.pickup_location.location.telephone;


obj.dropoffLocationAddrLine1 = details.dropoff_location.address.address_line_1;
obj.dropoffLocationAddrLine2 = details.dropoff_location.address.address_line_2;
obj.dropoffLocationCity = details.dropoff_location.address.city;
obj.dropoffLocationCountry = details.dropoff_location.address.country_code;
obj.dropoffLocationPostCode = details.dropoff_location.address.postal_code;
obj.dropoffLocationHours = details.dropoff_location.location.hours;
obj.dropoffLocationName = details.dropoff_location.location.name;
obj.dropoffLocationTelephone = details.dropoff_location.location.telephone;


obj.rateAmount = details.vehicleTotal;
obj.rateCurrency = details.currency;
obj.rateDays = 1;
obj.rateCode = details.rateCode;
//--------------------------------------------------------------------------------------------------------


obj.totalReservation = details.reservation;
obj.totalTaxFees = (parseFloat(details.reservation) - parseFloat(details.vehicleTotal)).toFixed(2);
// obj.totalTaxFees = Math.round((obj.totalTaxFees * 100) / 100).toFixed(2);
obj.totalVehicleTotal = details.vehicleTotal;


// Define type of object for shopping cart
obj.objectType = "car";

//ModelData.Add(oSimpleFormVehicleRate, obj);

// var formattedDates = modeloMultiModelFormattedDateTime.getData();
// var formattedPickup = formattedDates.formattedPickup;
// var formattedDropff = formattedDates.formattedDropff;
obj.formattedPickup = formatDate(datePickup);
obj.formattedDropff = formatDate(dateDropOff);




var imageSrc = oImageVehicleRate.getSrc();
obj.imageSrc = imageSrc;

var carName = oTitleVehicleRateName.getText();
obj.name = carName;

//ID
// var transactionId = vehicleRate.transaction.transaction_id;
// obj.transactionId = transactionId;

//console.log("Rate Obj =",obj);
modeloSimpleFormVehicleAddressDetails.setData(obj);
modeloSimpleFormVehiclePriceDetails.setData(obj);

// ----------------- End Setting the vehicle data --------------------------------
modelDialogCarDetails.setData(obj)
DialogCarDetails.open();
//oApp.to(oPageVehicleRate);
