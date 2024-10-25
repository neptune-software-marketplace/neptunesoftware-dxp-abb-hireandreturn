var options = {
    parameters: {
        "where": JSON.stringify({"carID": modelSimpleForm.getData().car_id})
    },
    data: {
        "carID": modelSimpleForm.getData().car_id,
    }
};

apiGet_Pictures_Car(options);