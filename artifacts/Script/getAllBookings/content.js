
const data = await entities.car_booking.find({
    order: {
        createdAt: "ASC",
        //id: "DESC"
    }, 
   });

   console.log(data)
result.data = data;
complete()