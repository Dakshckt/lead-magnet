
api = "https://opticalerp.in:85/api/cascadecountrycitystate/getcountries"

fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})