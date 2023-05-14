

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
const  checkAmount= document.getElementById("check-amount");


submit.addEventListener("click", () =>{

    let totAmnt = parseFloat( totalAmount.value);
    if (totAmnt.length == 0 || totAmnt  < 0) 
    {
        alert("Field cannot contain null and negative values");
    } 

    let totexp = parseFloat( totAmnt);
    let sumExp = parseFloat(incomeAmount.innerText) + totexp
    incomeAmount.innerHTML = sumExp;
     totalAmount.value = '';
     
    balanceAmount.innerHTML = parseFloat(incomeAmount.innerText)  - parseFloat(expenditureValue.innerText) ;
   
  
});
 
    checkAmount.addEventListener("click", (e) =>{
   
    let expAmnt = parseFloat(expenseAmount.value);

    if (expenseName.value.length == 0) 
    {
        alert(" Expense field cannot be empty");
    } 
    if (expAmnt < 0 ) 
    {
        alert("Expense amount cannot be a negative value");
    } 

     
    let expenditure = parseFloat(expenseAmount.value);
    let sum = parseFloat( expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;
    expenseAmount.value = '';
    balanceAmount.innerHTML = parseFloat( balanceAmount.innerText) - expenditureValue.innerText;

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

   
 