// _PictureTableItem = oEvent.getParameter("listItem");
// _contextPictureTable = oEvent.getParameter("listItem").getBindingContext().getObject(); // defined in "Functions"

_PictureTableItem = oEvent.oSource.getBindingContext();  


// Get Entire Model
_contextPictureTable = _PictureTableItem.getObject();


DeleteSinglePictureDialog.open();
