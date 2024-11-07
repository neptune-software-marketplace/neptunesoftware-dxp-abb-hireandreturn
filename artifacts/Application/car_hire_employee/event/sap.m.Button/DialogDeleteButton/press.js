var options = {
    parameters: {
        "where": JSON.stringify({"id": modelSelectedCar.getData().id})
    },
    data: {
        "id": modelSelectedCar.getData().id
    }
};

apiDelete_Car_API(options);


var options2 = {
    parameters: {
        "where": JSON.stringify({"bookingId": modelSelectedCar.getData().id})
    },
    data: {
        "id": modelSelectedCar.getData().id
    }
};

apiDeleteBookingSignatureRent(options2);


DeleteDialog.close();