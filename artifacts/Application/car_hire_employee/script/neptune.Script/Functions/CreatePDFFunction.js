//let PDFData = modelSimpleForm.getData();

function createPDF() {

var PDFData = { pdfHeader: "Added tomorrow", pdfBookingData: modelSimpleForm.getData() };
console.log(PDFData);

// let PDFData = {field1: modelSimpleForm.getData(),
// field2: inputField.getValue(),
// field3: "testing string"}

$.ajax({
    type: "POST",
    url: "/pdf/CAR_HANDOVER_PROTOCOL",
    data: PDFData,
    success: function(data) {
        //console.log("data:application/pdf;base64," + data)

        var temp = data

        pdfAttachement = temp;

        App.setBusy(false);
        //App.to(PDFViewerPage);

        var pdfurl = createDataURL(temp);
        console.log(pdfurl);
        PDFViewer.setSource(pdfurl);

    },
    error: function(result,status) {
        console.log("error!")
    },

});

}

function createPDFAndSendMail() {

var PDFData = { pdfHeader: "Added tomorrow", pdfBookingData: modelSimpleForm.getData() };
console.log(PDFData);

// let PDFData = {field1: modelSimpleForm.getData(),
// field2: inputField.getValue(),
// field3: "testing string"}

$.ajax({
    type: "POST",
    url: "/pdf/CAR_HANDOVER_PROTOCOL",
    data: PDFData,
    success: function(data) {
        //console.log("data:application/pdf;base64," + data)

        var temp = data

        pdfAttachement = temp;

        App.setBusy(false);
        //App.to(PDFViewerPage);

        var pdfurl = createDataURL(temp);
        console.log(pdfurl);
        PDFViewer.setSource(pdfurl);

        //IF sending mail should be active uncomment next row!
        sendEmailRentalHandover();

    },
    error: function(result,status) {
        console.log("error!")
    },

});

}