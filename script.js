const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const button = document.querySelector("header button");

button.addEventListener("click", Add);
form.addEventListener("change", Save);

function Add() {
  const today = new Date().toLocaleDateString().slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert('Dia ja existe 🔴')
    return
  }
  nlwSetup.addDay(today)
  alert("Dia adicionado com sucesso ✅")
  
}

function Save() {
  localStorage.setItem("nlwSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("nlwSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
/*const data = {
  run: ['01-01', '01-02', '01-03','01-04', '01-05', '01-06', '01-07', '01-08', '01-09'],
  water: ['01-01', '01-03', '01-04'],
  food: ['01-05', '01-02'],
  jounal: ['01-05', '01-02'],
  tablet: ['01-05', '01-02'],
}

nlwSetup.setData(data)
nlwSetup.load()*/