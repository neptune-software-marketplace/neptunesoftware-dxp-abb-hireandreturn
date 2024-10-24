const reqBody = req.body;

await entities.car_booking
    .createQueryBuilder()
    .delete()
    .where("id = :id", { id: reqBody.id })
    //.andWhere(...)
    //.orWhere(...)
    .execute();

await entities.cardetails
    .createQueryBuilder()
    .update()
    .set({
        status: "AVIALABLE",
    })
    .where("id = :id", { id: reqBody.car_id })
    .execute();

complete();
