const reqBody = req.body;

await entities.car_booking
    .createQueryBuilder()
    .update()
    .set({ return_sign: reqBody.return_sign, clearance_status: "IN REVIEW",  booking_status: "RETURNED", return_date: reqBody.returnDate })
    .where("id = :id", { id: reqBody.id })
    .execute();

 

await entities.cardetails
    .createQueryBuilder()
    .update()
    .set({
        status: "AVAILABLE",
    })
    .where("id = :id", { id: reqBody.car_id })
    .execute();

complete();

