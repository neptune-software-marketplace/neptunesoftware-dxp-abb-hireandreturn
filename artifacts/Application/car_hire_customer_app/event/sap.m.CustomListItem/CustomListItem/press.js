// Get Binding Context
// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();

// Get Entire Model
const data = context.getObject();

modelSelectedCar.setData(data);
modelSimpleForm.setData(data);
modeloPageManageBookingDetails.setData(data);


console.log("data")
console.log(data.booking_status)



    var options = {
    parameters: {
        "where": JSON.stringify({ carID: data.car_id }),
    },
};

apiGet_damage_parts_pictures(options);

//In the following ajax Request we do call the Car SVG file and set it as content of the HTMLObject
var ajaxReq;

// Get path details of the selected car
var options = {
    parameters: {
       where: JSON.stringify({ id: data.car_id }),
    }
};

apiGet_Vehicles(options).then((result)=>{


    ajaxReq = $.ajax({
    url: data.car_svg,
    
    async: false, //Async because I want to load the SVG first, before moving to the following page.
    success: (data) => {
        const content = new XMLSerializer().serializeToString(data);
        HTMLObject.setContent(content);
        HTMLObjectEditable.setContent(content);
        VBoxSVGContainer.rerender();
        VBoxSVGContainerEditable.rerender();
        oApp.to(oPageManageBookingDetails);
        modelResponsivePopover.setData(modeloPageManageBookingDetails.getData())
    },
});




var aPathsOUT = $("path.part");

    //console.log(aPathsOUT);

    //Getting data from SimpleForm and adding the classes
    $(aPathsOUT[0]).addClass(modelSelectedCar.getData().parts.path1.type);
    $(aPathsOUT[1]).addClass(modelSelectedCar.getData().parts.path2.type);
    $(aPathsOUT[2]).addClass(modelSelectedCar.getData().parts.path3.type);
    $(aPathsOUT[3]).addClass(modelSelectedCar.getData().parts.path4.type);
    $(aPathsOUT[4]).addClass(modelSelectedCar.getData().parts.path5.type);
    $(aPathsOUT[5]).addClass(modelSelectedCar.getData().parts.path6.type);
    $(aPathsOUT[6]).addClass(modelSelectedCar.getData().parts.path7.type);
    $(aPathsOUT[7]).addClass(modelSelectedCar.getData().parts.path8.type);
    $(aPathsOUT[8]).addClass(modelSelectedCar.getData().parts.path9.type);
    $(aPathsOUT[9]).addClass(modelSelectedCar.getData().parts.path10.type);
    $(aPathsOUT[10]).addClass(modelSelectedCar.getData().parts.path11.type);
    $(aPathsOUT[11]).addClass(modelSelectedCar.getData().parts.path12.type);
    $(aPathsOUT[12]).addClass(modelSelectedCar.getData().parts.path13.type);
    $(aPathsOUT[13]).addClass(modelSelectedCar.getData().parts.path14.type);
    $(aPathsOUT[14]).addClass(modelSelectedCar.getData().parts.path15.type);

    $(aPathsOUT[0]).addClass("part1");
    $(aPathsOUT[1]).addClass("part2");
    $(aPathsOUT[2]).addClass("part3");
    $(aPathsOUT[3]).addClass("part4");
    $(aPathsOUT[4]).addClass("part5");
    $(aPathsOUT[5]).addClass("part6");
    $(aPathsOUT[6]).addClass("part7");
    $(aPathsOUT[7]).addClass("part8");
    $(aPathsOUT[8]).addClass("part9");
    $(aPathsOUT[9]).addClass("part10");
    $(aPathsOUT[10]).addClass("part11");
    $(aPathsOUT[11]).addClass("part12");
    $(aPathsOUT[12]).addClass("part13");
    $(aPathsOUT[13]).addClass("part14");
    $(aPathsOUT[14]).addClass("part15");

    const aPathsOUT1 = $("path.part1");
    const aPathsOUT2 = $("path.part2");
    const aPathsOUT3 = $("path.part3");
    const aPathsOUT4 = $("path.part4");
    const aPathsOUT5 = $("path.part5");
    const aPathsOUT6 = $("path.part6");
    const aPathsOUT7 = $("path.part7");
    const aPathsOUT8 = $("path.part8");
    const aPathsOUT9 = $("path.part9");
    const aPathsOUT10 = $("path.part10");
    const aPathsOUT11 = $("path.part11");
    const aPathsOUT12 = $("path.part12");
    const aPathsOUT13 = $("path.part13");
    const aPathsOUT14 = $("path.part14");
    const aPathsOUT15 = $("path.part15");

    aPathsOUT1.css({ "fill-opacity": modelSelectedCar.getData().parts.path1.severity });
    aPathsOUT2.css({ "fill-opacity": modelSelectedCar.getData().parts.path2.severity });
    aPathsOUT3.css({ "fill-opacity": modelSelectedCar.getData().parts.path3.severity });
    aPathsOUT4.css({ "fill-opacity": modelSelectedCar.getData().parts.path4.severity });
    aPathsOUT5.css({ "fill-opacity": modelSelectedCar.getData().parts.path5.severity });
    aPathsOUT6.css({ "fill-opacity": modelSelectedCar.getData().parts.path6.severity });
    aPathsOUT7.css({ "fill-opacity": modelSelectedCar.getData().parts.path7.severity });
    aPathsOUT8.css({ "fill-opacity": modelSelectedCar.getData().parts.path8.severity });
    aPathsOUT9.css({ "fill-opacity": modelSelectedCar.getData().parts.path9.severity });
    aPathsOUT10.css({ "fill-opacity": modelSelectedCar.getData().parts.path10.severity });
    aPathsOUT11.css({ "fill-opacity": modelSelectedCar.getData().parts.path11.severity });
    aPathsOUT12.css({ "fill-opacity": modelSelectedCar.getData().parts.path12.severity });
    aPathsOUT13.css({ "fill-opacity": modelSelectedCar.getData().parts.path13.severity });
    aPathsOUT14.css({ "fill-opacity": modelSelectedCar.getData().parts.path14.severity });
    aPathsOUT15.css({ "fill-opacity": modelSelectedCar.getData().parts.path15.severity });

    const aPaths = $("path.part");
    //console.log(aPaths);
    $(aPaths[1]).addClass(modelSelectedCar.getData().parts.path1.type);
    rerender();



 oApp.to(oPageManageBookingDetails);

});