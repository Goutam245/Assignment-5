document.getElementById('add-money')
.addEventListener('click', function(){
    
    const addMoney = document.getElementById('add-input-money').value;

    const Balance = document.getElementById('balance-1').innerHTML;

    console.log(addMoney,Balance)
    
    if(isNaN(addMoney)  ){
        alert('Wrong Amount! Pleace try Again')
         return;
    }
   

    const balance = document.getElementById('Account-balance').innerText;
    console.log(balance)

    const addMoneynumber= parseFloat(addMoney);
    const balancenumber= parseFloat (balance);
    const newbalance= addMoneynumber+ balancenumber;
    
    console.log(newbalance);

    
    document.getElementById('Account-balance').innerText = newbalance;


    document.getElementById('my_modal_1').showModal()

//---------------------------------
const historyitem = document.createElement("div")
historyitem.className = "bg-white px-8 py-4 mt-8 space-y-4 border border-black rounded-md "

historyitem.innerHTML = `
  <p>${new Date().toLocaleDateString('en-US', {
    timeZone: 'Asia/Dhaka'
  })}</p>

<p>${addMoneynumber.toFixed(2)} Taka is Donated for famine-2024 at Feni, Bangladesh</p>`
const historyContainer = document.getElementById('history-list');

historyContainer.appendChild(historyitem, historyContainer.firstChild)
   

})


  document.getElementById('add-money-2')
  .addEventListener('click', function(){
    const addMoney2 = document.getElementById('add-input-money-2').value;

    const Balance2= document.getElementById('balance-2').innerText;
    console.log(addMoney2, Balance2)

    if(isNaN(addMoney2)){
        alert('Wrong Amount! Pleace try again')
        return;
    }
    const balance2 = document.getElementById('Account-balance').innerText;
    console.log(balance2)

    const addMoneynumber= parseFloat(addMoney2);
    const balancenumber= parseFloat (balance2);
    const newbalance= addMoneynumber+ balancenumber;
    
    console.log(newbalance);

    
    document.getElementById('Account-balance').innerText = newbalance;

    document.getElementById('my_modal_1').showModal()

    //---------------------------
    const historyitem = document.createElement("div")
historyitem.className = "bg-white px-8 py-4 mt-8 space-y-4 border border-black rounded-md "

historyitem.innerHTML = `
  <p>${new Date().toLocaleDateString('en-US', {
    timeZone: 'Asia/Dhaka'
  })}</p>

<p>${addMoneynumber.toFixed(2)} Taka is Donated for Flood Relief in Feni,Bangladesh</p>`
const historyContainer = document.getElementById('history-list');

historyContainer.appendChild(historyitem, historyContainer.firstChild)

})



document.getElementById('add-money-3')
.addEventListener('click', function(){
  const addMoney3 = document.getElementById('add-input-money-3').value;

  const Balance3= document.getElementById('balance-3').innerText;
  console.log(addMoney3, Balance3)

   if(isNaN(addMoney3)){
       alert('Wrong Amount! Pleace try again')
       return;
   }
  const balance3= document.getElementById('Account-balance').innerText;
  console.log(balance3)

  const addMoneynumber= parseFloat(addMoney3);
  const balancenumber= parseFloat (balance3);
  const newbalance= addMoneynumber+ balancenumber;
  
  console.log(newbalance);

  
  document.getElementById('Account-balance').innerText = newbalance;


  document.getElementById('my_modal_1').showModal()

  //-------------------

  const historyitem = document.createElement("div")
historyitem.className = "bg-white px-8 py-4 mt-8 space-y-4 border border-black rounded-md "

historyitem.innerHTML = `
  <p>${new Date().toLocaleDateString('en-US', {
    timeZone: 'Asia/Dhaka'
  })}</p>

<p>${addMoneynumber.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>`
const historyContainer = document.getElementById('history-list');

historyContainer.appendChild(historyitem, historyContainer.firstChild)
   
  
})
    


// History Button 

const historytab = document.getElementById('history-tab')
const DonationTab= document.getElementById('donation-tab')
historytab.addEventListener('click', function(){


     historytab.classList.add('btn', 'btn-info', 'text-white')

     DonationTab.classList.remove('btn', 'btn-info', 'text-white')

     document.getElementById('expensive-form').classList.add('hidden')
     document.getElementById('history-list').classList.remove('hidden')
     document.getElementById('donation-tab').classList.add('hidden')


     
     
})





