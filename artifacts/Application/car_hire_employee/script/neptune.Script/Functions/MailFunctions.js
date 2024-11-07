var pdfAttachement;

function sendEmailRentalHandover() {
    var filename = "CarHandoverProtocol" + ".pdf";

    var options = {
        data: {
            
            email: modelSelectedCar.getData().customerMail,
            attachments: { filename: filename, pdf: pdfAttachement },
        },
    };

  //  console.log(options.data.email);
    apiSendMailRentalHandover(options);
}