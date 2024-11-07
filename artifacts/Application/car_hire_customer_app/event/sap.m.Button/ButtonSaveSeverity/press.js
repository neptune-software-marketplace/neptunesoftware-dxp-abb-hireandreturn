const pathId = _oActivePath2.attr("id"); //gets ID of path like path3
const typeClass = _oActivePath2.attr("class"); // get "part chip" as an example  NEED to split and take 2.
const severity = Slider.getValue()/100;

var typeClassFiltered = typeClass.split(' ');
console.log("pathid: "+ pathId);
//console.log(modelSelectedCar.getData().parts[pathId].severity); // DELETE LATER

var data = modelSelectedCar.getData();

data.parts[pathId].severity = severity;
data.parts[pathId].type = typeClassFiltered[typeClassFiltered.length - 1];
//console.log("VALUE: "+ typeClassFiltered[typeClassFiltered.length - 1]);

modelSimpleForm.setData(data);

console.log(modelSelectedCar.getData().parts[pathId].severity);

//modelSimpleForm.setData().parts.pathId.severity = 1;

//console.log(modelSelectedCar.getData());

ResponsivePopover.close();

//modelSelectedCar.getData().parts.path1.severity