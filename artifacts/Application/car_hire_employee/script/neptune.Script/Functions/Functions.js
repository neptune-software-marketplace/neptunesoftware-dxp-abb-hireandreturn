var selectedCar;
var signaturePadReturn;
var signaturePadPickup;

function resetSvgClasses (){
//Will be called after Saving and Navigating back from the SVG so it will be resetted and ready to be set again with new data.

    const aPathsOUT = $("path.part");

    //RESETTING THE CLASSES IN SVG
    $(aPathsOUT[0]).removeClass();
    $(aPathsOUT[1]).removeClass();
    $(aPathsOUT[2]).removeClass();
    $(aPathsOUT[3]).removeClass();
    $(aPathsOUT[4]).removeClass();
    $(aPathsOUT[5]).removeClass();
    $(aPathsOUT[6]).removeClass();
    $(aPathsOUT[7]).removeClass();
    $(aPathsOUT[8]).removeClass();
    $(aPathsOUT[9]).removeClass();
    $(aPathsOUT[10]).removeClass();
    $(aPathsOUT[11]).removeClass();
    $(aPathsOUT[12]).removeClass();


    $(aPathsOUT[0]).addClass("part");
    $(aPathsOUT[1]).addClass("part");
    $(aPathsOUT[2]).addClass("part");
    $(aPathsOUT[3]).addClass("part");
    $(aPathsOUT[4]).addClass("part");
    $(aPathsOUT[5]).addClass("part");
    $(aPathsOUT[6]).addClass("part");
    $(aPathsOUT[7]).addClass("part");
    $(aPathsOUT[8]).addClass("part");
    $(aPathsOUT[9]).addClass("part");
    $(aPathsOUT[10]).addClass("part");
    $(aPathsOUT[11]).addClass("part");
    $(aPathsOUT[12]).addClass("part");

    aPathsOUT.css({"fill-opacity": 0});

}


var _contextPictureTable = null; // Is used in TableCarPictures-delete event.
var _PictureTableItem = null; // Is used in TableCarPictures-delete event.

var _compareModel = null; //This is the comparison Model, where we do check if we have made some changes to the model later.
// If we made changes to the model a popup will come up if we do want to Save the changes or not for a car.

function hideControls(status){
    if(status == "BOOKED"){
        SubmitRentalButton.setVisible(false);
        SaveChangesButton.setVisible(false);
        ButtonHandOver.setVisible(true);
        ButtonPDFHandOver.setVisible(false)

    }else if(status == "RENTED"){
        SubmitRentalButton.setVisible(false);
        SaveChangesButton.setVisible(false);
        ButtonHandOver.setVisible(false);
        ButtonPDFHandOver.setVisible(true)

    }else if(status == "RETURNED"){
        SubmitRentalButton.setVisible(true);
        SaveChangesButton.setVisible(true);
        ButtonHandOver.setVisible(false);
        ButtonPDFHandOver.setVisible(true)

    }
}

function saveDamageDetails(){
    var currentEditData = modelSimpleForm.getData();
    var updateData =  {
            "path1": {
                "type": currentEditData.parts.path1.type,
                "severity": currentEditData.parts.path1.severity,
            },
            "path2": {
                "type": currentEditData.parts.path2.type,
                "severity": currentEditData.parts.path2.severity,
            },
            "path3": {
                "type": currentEditData.parts.path3.type,
                "severity": currentEditData.parts.path3.severity,
            },
            "path4": {
                "type": currentEditData.parts.path4.type,
                "severity": currentEditData.parts.path4.severity,
            },
            "path5": {
                "type": currentEditData.parts.path5.type,
                "severity": currentEditData.parts.path5.severity,
            },
            "path6": {
                "type": currentEditData.parts.path6.type,
                "severity": currentEditData.parts.path6.severity,
            },
            "path7": {
                "type": currentEditData.parts.path7.type,
                "severity": currentEditData.parts.path7.severity,
            },
            "path8": {
                "type": currentEditData.parts.path8.type,
                "severity": currentEditData.parts.path8.severity,
            },
            "path9": {
                "type": currentEditData.parts.path9.type,
                "severity": currentEditData.parts.path9.severity,
            },
            "path10": {
                "type": currentEditData.parts.path10.type,
                "severity": currentEditData.parts.path10.severity,
            },
            "path11": {
                "type": currentEditData.parts.path11.type,
                "severity": currentEditData.parts.path11.severity,
            },
            "path12": {
                "type": currentEditData.parts.path12.type,
                "severity": currentEditData.parts.path12.severity,
            },
            "path13": {
                "type": currentEditData.parts.path13.type,
                "severity": currentEditData.parts.path13.severity,
            },
        }
    

var options = { 
    parameters: {
        "where": JSON.stringify({id: currentEditData.id}) // Optional 
    },
    data: {
        "damage_images": JSON.stringify(modelTableCarPictures.getData()),
        "parts": updateData
    }
};

console.log(currentEditData);

apiUpdateCarBookingDetails(options);

var carDetailsOptions = {
    parameters: {
        "where": JSON.stringify({id: currentEditData.car_id})
    },
    data: {"parts": updateData}
};

apiUpdateCarDetails(carDetailsOptions);

}