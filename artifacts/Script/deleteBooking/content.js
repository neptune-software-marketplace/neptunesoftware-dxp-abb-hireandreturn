const reqBody = req.body;

//Delete booking details from booking table
await entities.car_booking
    .createQueryBuilder()
    .delete()
    .where("id = :id", { id: reqBody.id })
    //.andWhere(...)
    //.orWhere(...)
    .execute();

//Update the car details
await entities.cardetails
    .createQueryBuilder()
    .update()
    .set({
        status: "AVAILABLE",
    })
    .where("id = :id", { id: reqBody.car_id })
    .execute();

complete();
