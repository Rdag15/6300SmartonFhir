

function onError(data) {
    $('body').append(JSON.stringify(data));
}

function onReady(client) {
    // Page receives access token from auth server
    // use the access token, and start fetching patient data
    // access token valid for 10 min
    console.log("This is onready");
    //access token
    var smart = client.getState(); 
    var token = smart.tokenResponse.access_token;
    console.log(token);
    //patient ID
    var patient = smart.tokenResponse.patient;
    console.log(patient);
    //FHIR endpoint
    var baseURL = smart.serverUrl;
    console.log(baseURL);
    //start the app workflow
    // pass the access_token, patient ID, fhir endpoint
    var json_data = {};
        json_data.token = token;
        json_data.patient = patient;
        json_data.baseURL = baseURL;
    
    // custom js method to make the fhir queries
    // the method is described in app-script.js
    get_medications(json_data);
}
//start here
//when page is laoded the index receives code
// this fhir function, exchanges code for access token
FHIR.oauth2.ready()
    .then(client => {onReady(client)})
    .then(console.log)
    .catch(console.error);