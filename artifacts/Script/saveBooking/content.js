const reqBody = req.body;
const user = req.user;

const entity = await entities.car_booking.insert({
    user_id: user.id,
    first_name: reqBody.first_name,
    last_name: reqBody.last_name,
    phone_no: reqBody.phone_no,
    email: reqBody.email,
    address: reqBody.address,
    booking_no: reqBody.booking_no,
    car_details: reqBody.car_details,
    car_id: reqBody.car_id,
    booking_status: "BOOKED",
    //booking_sign: reqBody.booking_sign,
    car_image: reqBody.car_image,
    total_cost: reqBody.total_cost,
    booked_days: reqBody.booked_days,
    car_svg: reqBody.car_svg,
    parts: {
    "path1": {
        "type": "",
        "severity": 0
    },
    "path2": {
        "type": "",
        "severity": 0
    },
    "path3": {
        "type": "",
        "severity": 0
    },
    "path4": {
        "type": "",
        "severity": 0
    },
    "path5": {
        "type": "",
        "severity": 0
    },
    "path6": {
        "type": "",
        "severity": 0
    },
    "path7": {
        "type": "",
        "severity": 0
    },
    "path8": {
        "type": "",
        "severity": 0
    },
    "path9": {
        "type": "",
        "severity": 0
    },
    "path10": {
        "type": "",
        "severity": 0
    },
    "path11": {
        "type": "",
        "severity": 0
    },
    "path12": {
        "type": "",
        "severity": 0
    },
    "path13": {
        "type": "",
        "severity": 0
    }
}
});

await entities.cardetails
    .createQueryBuilder()
    .update()
    .set({
        status: "RENTED",
    })
    .where("id = :id", { id: reqBody.car_id })
    .execute();

complete();
