function saveRequest(questionaire, formData) {
    var options = {
        data: {
            username: AppCache.userInfo.username,
            feedbackDetails: JSON.stringify(questionaire),
            formData: formData,
        },
    };

    apiSave_Feedback(options);
}



function uploadPicture() {
    var pictureToUpload = oImageUpload.getSrc();

    var options = {
        data: {
            carID: modeloPageManageBookingDetails.getData().car_id, // set from multimodel
            picture: pictureToUpload,
            part: "path1",
        },
    };

    apiUpload_Picture_API(options)
}

//Send PDF data
function createPDF() {
    var PDFData = { pdfHeader: "Added tomorrow", pdfBookingData: modelSelectedCar.getData() };
    console.log(PDFData);

    $.ajax({
        type: "POST",
        url: "/pdf/CAR_HANDOVER_PROTOCOL",
        data: PDFData,
        success: function (data) {
            //console.log("data:application/pdf;base64," + data)

            var temp = data;

            pdfAttachement = temp;

            oApp.setBusy(false);
            //App.to(PDFViewerPage);

            var pdfurl = createDataURL(temp);
            console.log(pdfurl);
            PDFViewer.setSource(pdfurl);
        },
        error: function (result, status) {
            console.log("error!");
        },
    });
}

function onSelectDamageType(oEvent) {
    const sType = oEvent.getSource().sId;

    console.log(oEvent.getSource().sId);

    console.log(_oActivePath2);

    _oActivePath2.removeClass("scratch");
    _oActivePath2.removeClass("dent");
    _oActivePath2.removeClass("chip");

    //Due to the name change when app is on launchpad
    if (sType.includes("Scratch")) {
        _oActivePath2.addClass("scratch");
    } else if (sType.includes("Dent")) {
        _oActivePath2.addClass("dent");
    } else if (sType.includes("PaintChip")) {
        _oActivePath2.addClass("chip");
    }

    // Navigate to the next page
    //const oTarget = this.getView().byId("severity")
    //this.getView().byId("idNavContainer").to(oTarget)
    idNavContainer.to(severity);
}

function saveDamageDetails(currentEditData) {
    
     var updateData = {
        path1: {
            type: currentEditData.parts.path1.type,
            severity: currentEditData.parts.path1.severity,
        },
        path2: {
            type: currentEditData.parts.path2.type,
            severity: currentEditData.parts.path2.severity,
        },
        path3: {
            type: currentEditData.parts.path3.type,
            severity: currentEditData.parts.path3.severity,
        },
        path4: {
            type: currentEditData.parts.path4.type,
            severity: currentEditData.parts.path4.severity,
        },
        path5: {
            type: currentEditData.parts.path5.type,
            severity: currentEditData.parts.path5.severity,
        },
        path6: {
            type: currentEditData.parts.path6.type,
            severity: currentEditData.parts.path6.severity,
        },
        path7: {
            type: currentEditData.parts.path7.type,
            severity: currentEditData.parts.path7.severity,
        },
        path8: {
            type: currentEditData.parts.path8.type,
            severity: currentEditData.parts.path8.severity,
        },
        path9: {
            type: currentEditData.parts.path9.type,
            severity: currentEditData.parts.path9.severity,
        },
        path10: {
            type: currentEditData.parts.path10.type,
            severity: currentEditData.parts.path10.severity,
        },
        path11: {
            type: currentEditData.parts.path11.type,
            severity: currentEditData.parts.path11.severity,
        },
        path12: {
            type: currentEditData.parts.path12.type,
            severity: currentEditData.parts.path12.severity,
        },
        path13: {
            type: currentEditData.parts.path13.type,
            severity: currentEditData.parts.path13.severity,
        },
        path14: {
            type: currentEditData.parts.path12.type,
            severity: currentEditData.parts.path12.severity,
        },
        path15: {
            type: currentEditData.parts.path13.type,
            severity: currentEditData.parts.path13.severity,
        },
    };

    var options = {
        parameters: {
            where: JSON.stringify({ id: currentEditData.id }), // Optional
        },
        data: {
            damage_images: JSON.stringify(modelListCarDamagePictures.getData()),
            parts: updateData,
        },
    };

    apiUpdateCarBookingDetails(options);

    var carDetailsOptions = {
        parameters: {
            where: JSON.stringify({ id: currentEditData.car_id }),
        },
        data: { parts: updateData },
    };
    console.log(currentEditData);
    apiUpdateCarDetails(carDetailsOptions).then((res)=> console.log("I go"))
}
