const api = "https://opticalerp.in:85/api/cascadecountrycitystate/getcountries"; // Replace with your API URL
const userData = {
    "id": 0,
    "tenantId": "string",
    "customerId": 0,
    "firstName": "string",
    "lastName": "string",
    "emailId": "string",
    "mobileNo": "string",
    "whatsAppNo": "string",
    "addressLine1": "string",
    "addressLine2": "string",
    "cityId": 0,
    "cityName": "string",
    "stateId": 0,
    "stateName": "string",
    "countryId": 0,
    "countryName": "string",
    "pincode": 0,
    "leadSource": 0,
    "leadSourceName": "string",
    "otherSource": "string",
    "occupation": 0,
    "occupationName": "string",
    "organisationName": "string",
    "workType": "string",
    "monthlyIncome": 0,
    "assignedTo": 0,
    "assignedToName": "string",
    "leadStatus": 0,
    "leadStatusName": "string",
    "createdBy": 0,
    "createdByName": "string",
    "leadDate": "string",
    "isActive": true,
    "serviceDetails": [
      {
        "id": 0,
        "customerId": 0,
        "serviceId": 0,
        "serviceName": "string",
        "leadId": 0,
        "clientId": 0,
        "isExistingClient": true,
        "remark": "string",
        "assignedTo": 0,
        "assignedToName": "string",
        "isActive": true
      }
    ]
  };



fetch(api, 
{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
})
.then((response) => {
    return response.json(); 
})
.then((data) => {
    console.log("Server Response:", data); 
})
.catch((error) => {
    console.error("Error during fetch:", error);
});
