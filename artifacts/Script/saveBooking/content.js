const reqBody = req.body;
const user = req.user;

//Get details of the car so as to add exisitng damage parts
const selectedCar = await entities.cardetails.findOne(reqBody.car_id);
log.info(selectedCar)

//Save booking details
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
    parts: selectedCar.parts

});

//Update car details 
await entities.cardetails
    .createQueryBuilder()
    .update()
    .set({
        status: "RENTED",
    })
    .where("id = :id", { id: reqBody.car_id })
    .execute();

complete();
