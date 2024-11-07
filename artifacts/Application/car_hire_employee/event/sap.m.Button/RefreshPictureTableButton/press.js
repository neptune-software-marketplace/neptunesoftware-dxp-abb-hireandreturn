var options = {
    parameters: {
        "where": JSON.stringify({"carID": modelSelectedCar.getData().car_id})
    },
    data: {
        "carID": modelSelectedCar.getData().car_id,
    }
};

apiGet_damage_parts_pictures(options);