var options = {
    parameters: {
        "where": JSON.stringify({"carID": modeloPageManageBookingDetails.getData().car_id})
    },
    data: {
        "carID": modeloPageManageBookingDetails.getData().car_id,
    }
};

apiGet_Pictures_Car(options);