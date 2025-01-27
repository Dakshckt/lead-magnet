
api = "https://opticalerp.in:85/api/cascadecountrycitystate/getcities"
// api = "https://fakestoreapi.com/products"

var displayCity = document.getElementById("displayCity")

fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    displayCity.innerHTML = ''
    console.log("Called..?")
    console.log(data)

    data.forEach(element => {
        var val = displayCity.innerHTML
        displayCity.innerHTML = val + `<option>${element.cityName}</option>`
    });
    
})