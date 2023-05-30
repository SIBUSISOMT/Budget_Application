const name = document.getElementById("name");
const totalAmount = document.getElementById("total-amount");
const submit = document.getElementById("submit");
let incomeAmount = document.getElementById("Income-amount");
let expenditureValue = document.getElementById("expenditure-value");
let balanceAmount = document.getElementById("balance-amount");
const listContainer = document.getElementById("list");
const productTitle = document.getElementById("product-title");
const expenseName = document.getElementById("product-title");
const expenseAmount = document.getElementById("user-amount");
const checkAmount = document.getElementById("check-amount");
const options = document.getElementById("options");


 let expenses = [];
 submit.addEventListener("click", () => {
  let totAmnt = parseFloat(totalAmount.value);
   if (totAmnt.length == 0 || totAmnt < 0) {
    alert("Field cannot contain null and negative values");
  }
   let totexp = parseFloat(totAmnt);
  let sumExp = parseFloat(incomeAmount.innerText) + totexp;
  incomeAmount.innerHTML = sumExp;
  totalAmount.value = '';
   let totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);
  balanceAmount.innerHTML = parseFloat(incomeAmount.innerText) - totalExpenses;
});


 checkAmount.addEventListener("click", (e) => {
  let expAmnt = parseFloat(expenseAmount.value);
   if (expenseName.value.length == 0) {
    alert("Expense field cannot be empty");
  }
  if (expAmnt < 0) {
    alert("Expense amount cannot be a negative value");
  }
   let expenditure = parseFloat(expenseAmount.value);
  expenses.push(expenditure);
   let sum = expenses.reduce((acc, curr) => acc + curr, 0);
  expenditureValue.innerHTML = sum;
  expenseAmount.value = '';
   balanceAmount.innerHTML = parseFloat(incomeAmount.innerText) - sum;
   updateBalance();

     e.preventDefault;
    let list = document.createElement('p')
    list.innerText= productTitle.value;
    productTitle.value = ''; 
    listContainer.appendChild(list);

    list.addEventListener('click',(e)=>{
    list.style.textDecorationColor= 'orange'
    list.style.textDecorationLine= 'line-through' 
})
list.addEventListener('dblclick',()=>{
    listContainer.removeChild(list);
})

});
function updateBalance() {
    let totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);
    balanceAmount.innerHTML = parseFloat(incomeAmount.innerText) - totalExpenses;
     if (balanceAmount.value < 1000) {
      options.innerHTML = "Hello " + name.value + ". Available balance must start from R1000. See our saving options below.";
    } else if (balanceAmount.value >= 1000 && balanceAmount.value < 5000) {
      options.innerHTML = "Hello " + name.value + ". You have R" + balanceAmount.value + ". To escape the rat race, try limiting your expenses.";
    } else if (balanceAmount.value >= 5000) {
      options.innerHTML = "Hello " + name.value + ". Your available balance is impressive. Please see investment options tailored for you.";
    }
  }
  