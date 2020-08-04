const form = document.querySelector("#form-info")
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const email = document.querySelector("#email")
const country = document.querySelector("#country")
const fnameMandatory = document.querySelector("#fnameMandatory")
const lnameMandatory = document.querySelector("#lnameMandatory")
const emailMandatory = document.querySelector("#emailMandatory")
const countryMandatory = document.querySelector("#countryMandatory")
form.addEventListener("submit", event => {
  event.preventDefault()
  if (email.value === "" || fname.value === "" || lname.value === "") {
    console.log ("Please check and complete all the mandatoy fields")
    if (fname.value === "") {
      fnameMandatory.innerText = "Required"
    }
    if (lname.value === "") {
      lnameMandatory.innerText = "Required"
    }
    if (email.value === "") {
      emailMandatory.innerText = "Required"
    }
  } else {
    form.submit ();
  }
})
