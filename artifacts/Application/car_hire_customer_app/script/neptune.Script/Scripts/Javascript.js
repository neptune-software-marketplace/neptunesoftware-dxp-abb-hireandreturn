
function saveRequest(questionaire, formData) {
// console.log("questionaire")
// console.log(questionaire)

// console.log("Form data")
// console.log(formData)
    var options = {
        data: {
            "username": AppCache.userInfo.username,
            "feedbackDetails": JSON.stringify(questionaire),
            "formData": formData
        },
    };
  

    apiSave_Feedback(options);
}

function parseFormsResponse(dataJSON) {
    var dataArray = JSON.parse(JSON.stringify(dataJSON.data));
    var setupArray = JSON.parse(JSON.stringify(dataJSON.config.setup));
    var elementsArr = flattenJSON(setupArray);
    var returnJSON = {};
    Object.keys(dataArray).forEach((key) => {
        var foundEl = elementsArr.find((el) => el.id === key);
        if (foundEl) {
            var keyStr = foundEl.title || foundEl.question || foundEl.placeholder; //change this line if you find something in the warning message
            if (!keyStr)
                console.warn(`No strings found for key ${key}. The element is : `, foundEl);
            returnJSON[keyStr] = dataArray[key];
        }
    });
    return returnJSON;
}

function flattenJSON(arr) {
    var result = [];
    function recurse(cur) {
        if (cur.hasOwnProperty("elements")) {
            result.push(cur);
            for (var i = 0, l = cur.elements.length; i < l; i++) recurse(cur.elements[i]);
        } else if (cur.hasOwnProperty("items")) {
            result.push(cur);
            for (var i = 0, l = cur.items.length; i < l; i++) recurse(cur.items[i]);
        } else {
            result.push(cur);
        }
    }

    for (var i = 0; i < arr.length; i++) {
        recurse(arr[i]);
    }

    result.forEach((r) => delete r.elements);
    return result;
}

sap.ui.getCore().attachInit(function(startParams) {
   
    FORMS.build(DialogFeedback, "81BE7386-9084-EF11-BDFD-000D3AB84645" ); //parentName: Name of parent component, ID:string
})



function uploadPicture(){
    var pictureToUpload = oImageUpload.getSrc();

    var options = {
        data: {
            "carID": modeloPageManageBookingDetails.getData().car_id, // set from multimodel
            "picture": pictureToUpload,
            "part" :  "path1",
        }
    };

apiUpload_Picture_API(options);    
}