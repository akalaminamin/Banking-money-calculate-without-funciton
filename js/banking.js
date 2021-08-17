
// deposit button
const depositBtn = document.getElementById("deposit-btn");

// handle deposit click event 
depositBtn.addEventListener("click", function(){
        // deposit input box
        const inputDeposit = document.getElementById("deposit-value");
        const convertInputDeposit = parseFloat(inputDeposit.value);

        if(convertInputDeposit > 0){
                // current deposit Value
                const currentValue = document.getElementById("total-deposit");
                const convertCurrentValue = parseFloat(currentValue.innerText);

                // update deposit value
                const updateDeposit = convertInputDeposit + convertCurrentValue;
                currentValue.innerText = updateDeposit;

                // current Balance
                const currentBalance = document.getElementById("total-balance");
                const convertCurrentBalance = parseFloat(currentBalance.innerText)

                // update Balance
                const updateBalance = updateDeposit + convertCurrentBalance;
                currentBalance.innerText = updateBalance;

                // clear input deposit field
                inputDeposit.value = "";
        }else if(convertInputDeposit != typeof number){
                alert("Enter your valid deposit Amount");
                // clear input deposit field
                inputDeposit.value = "";
        }
        
})

// withdraw button 
const withdrawBtn = document.getElementById("withdraw-btn");

// handle withdraw click event 
withdrawBtn.addEventListener("click", function(){
        // withdraw input box
        const inputWithdraw = document.getElementById("withdraw-value");
        const convertInputWithdraw = parseFloat(inputWithdraw.value);

        if(convertInputWithdraw > 0){
                // current amount withdraw 
                const currentwithdraw = document.getElementById("total-withdraw");
                const convertCurrentwithdraw = parseFloat(currentwithdraw.innerText);

                // Total amount withdraw 
                const totalWithdraw = convertInputWithdraw + convertCurrentwithdraw;
                currentwithdraw.innerText = totalWithdraw;

                // current Balance
                const currentBalance = document.getElementById("total-balance");
                const convertCurrentBalance = parseFloat(currentBalance.innerText)
                const updateBalance = convertCurrentBalance - totalWithdraw;
                currentBalance.innerText = updateBalance;

                // clear input withdraw field
                inputWithdraw.value = "";

        }else if(convertInputWithdraw != typeof number){
                alert("Enter your valid withdraw amount");
                // clear input withdraw field
                inputWithdraw.value = "";
        }
        
})











