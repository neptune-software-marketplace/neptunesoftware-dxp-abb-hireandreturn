const user = req.user;

const data = await entities.car_booking.find({
    where: {
        user_id: user.id, // Simple conditions
    },
    order: {
        createdAt: "ASC",
        //id: "DESC"
    }, 
   });

   console.log(JSON.stringify(data))
result.data = data;
complete()