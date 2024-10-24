//Send car details to the handover dialog
modelDialogHandOver.setData(modelPageRentalDetails.getData())

DialogHandOver.open()

var canvas = document.getElementById('signature-pad');
signaturePadPickup = new SignaturePad(canvas);
canvas.style.width = '500px';
canvas.style.height = '250px';
canvas.style.backgroundColor = 'white';
canvas.width = 500;
canvas.height = 250;