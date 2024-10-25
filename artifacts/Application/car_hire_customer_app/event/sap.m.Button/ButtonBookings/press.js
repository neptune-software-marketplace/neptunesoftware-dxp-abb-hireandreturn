apiGet_User_Bookings().then((result) => {
    //var carDetails = carData.find(obj => obj.id === objectId);
modeloListCarsBooked.setData(result)
  
});

oApp.to(oPageManageBookings);
