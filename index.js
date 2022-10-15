const inputEl = document.querySelector("#input-el")
const convertBtn = document.querySelector("#convert-btn")
const lengthEl = document.querySelector("#length")
const volumeEl = document.querySelector("#volume")
const massEl = document.querySelector("#mass")

const meterToFeet = 3.281 
const litreToGallon = 0.264 
const kiloToPound = 2.204 

convertBtn.addEventListener("click",function(){
    let inputGiven = inputEl.value
    
    // length
        lengthEl.textContent = `${inputGiven} meters = ${(inputGiven * meterToFeet).toFixed(3)} feet | ${inputGiven} feet = ${(inputGiven / meterToFeet).toFixed(3)} meters`
        
    // volume   
        volumeEl.textContent = `${inputGiven} litres = ${(inputGiven * litreToGallon).toFixed(3)} gallons | ${inputGiven} gallons = ${(inputGiven / litreToGallon).toFixed(3)} litres`
        
    // mass
        massEl.textContent = `${inputGiven} kilos = ${(inputGiven * kiloToPound).toFixed(3)} pounds | ${inputGiven} pounds = ${(inputGiven / kiloToPound).toFixed(3)} kilos`
   
})