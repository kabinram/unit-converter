const inputEl = document.querySelector("#input-el")
const convertBtn = document.querySelector("#convert-btn")
const lengthEl = document.querySelector("#length")
const volumeEl = document.querySelector("#volume")
const massEl = document.querySelector("#mass")

const meterToFeet = 3.281 
const litreToGallon = 0.264 
const kiloToPound = 2.204 

if(inputEl.value == 1){
    lengthEl.textContent= `1 meters = 3.28 feet | 1 feet = 0.30 meters`
    volumeEl.textContent= `1 litres = 0.26 gallons | 1 gallons = 3.79 litres`
    massEl.textContent = `1 kilos = 2.20 pounds | 1 pounds = 0.45 kilos`
}

convertBtn.addEventListener("click",function(){
    let inputGiven = inputEl.value
    
    // length
        lengthEl.textContent = `${inputGiven} meters = ${(inputGiven * meterToFeet).toFixed(2)} feet | ${inputGiven} feet = ${(inputGiven / meterToFeet).toFixed(2)} meters`
        
    // volume   
        volumeEl.textContent = `${inputGiven} litres = ${(inputGiven * litreToGallon).toFixed(2)} gallons | ${inputGiven} gallons = ${(inputGiven / litreToGallon).toFixed(2)} litres`
        
    // mass
        massEl.textContent = `${inputGiven} kilos = ${(inputGiven * kiloToPound).toFixed(2)} pounds | ${inputGiven} pounds = ${(inputGiven / kiloToPound).toFixed(2)} kilos`
   
})
