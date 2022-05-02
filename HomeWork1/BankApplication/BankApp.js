window.onload = function () {
    const create = document.getElementById("create-Id");
    const deposit = document.getElementById("deposit-Id");
    const accountName = document.getElementById("accountName");
    const listData = document.getElementById("listData-Id");
    const createForm1 = document.getElementById("create-account");
    const buttonsDeposit1 = document.getElementById("deposit-debit");
    const depositForm1 = document.getElementsByClassName("deposit-account");
    const depositField1 = document.getElementsByClassName("depositField");
    const debitField1 = document.getElementsByClassName("debitField");
    const depositText1 = document.getElementById("depositTextId");
    const debitText1 = document.getElementById("debitTextId");
    const accountId1 = document.getElementById("accountId");
    const depositId1 = document.getElementById("deposit-button");
    const debitId1 = document.getElementById("debit-button");
    const submitDeposit = document.getElementById("submit-Deposit");
    const submitDebit = document.getElementById("submit-Debit");

    class BankAccount {
        #accountName = "";
        #deposit = "";
        accountInfoList = [];
        constructor(accountName, deposit) {
            this.#accountName = accountName;
            this.#deposit = deposit;
        }

        createBankAccount(accountName, deposit) {
            let newData = new BankAccount(accountName, deposit);
            this.accountInfoList.push(newData);
        }
        getAccountName() {
            return this.#accountName;
        }

        getListOfData() {
            return "Account Name:  " + this.#accountName + "   Balance:  " + this.#deposit + "\n";
        }

        setdeposit(deposit) {
            this.#deposit = parseFloat(this.#deposit) + parseFloat(deposit);
        }

        setdebit(debit) {
            this.#deposit = parseFloat(this.#deposit) - parseFloat(debit);
        }

    }
    var bankAccount = new BankAccount();
    create.onclick = function () {
        const name = accountName.value;
        const depositAmount = deposit.value;

        if (name == null || depositAmount == null || name == "" || depositAmount == "") {
            alert("Please insert value");
            return null;
        }

        bankAccount.createBankAccount(name, depositAmount);
        buttonShowHide('block');
    }

    function loadListData() {
        let finalListData = "";
        for (const x of bankAccount.accountInfoList) {
            finalListData += x.getListOfData();
        }
        listData.value = finalListData;
    }


    function setAccountNameDropdown() {
        let x = bankAccount.accountInfoList[bankAccount.accountInfoList.length - 1];
        accountId1.append(new Option(x.getAccountName(), x.getAccountName()));
    }

    function initialLoadShowHide(option, fieldEvent) {
        for (const i of depositForm1) {
            i.style.display = option;
        }

        // input 3 to hide both field
        if (fieldEvent == 1 || fieldEvent == 3) {
            //this is field 1
            for (const i of depositField1) {
                i.style.display = option;
            }
        }
        if (fieldEvent == 2 || fieldEvent == 3) {
            //this is field 2
            for (const i of debitField1) {
                i.style.display = option;
            }
        }

    }
    function buttonShowHide(option) {
        buttonsDeposit1.style.display = option;
        switch (option) {
            case 'block':
                option = 'none';
                break;
            case 'none':
                option = 'block';
                break;
        }
        createForm1.style.display = option;
    }

    initialLoadShowHide('none', 3);
    buttonShowHide('none')

    depositId1.onclick = function () {
        initialLoadShowHide('block', 1);
        buttonsDeposit1.style.display = 'none';
        setAccountNameDropdown();
    }
    debitId1.onclick = function () {
        initialLoadShowHide('block', 2);
        buttonsDeposit1.style.display = 'none';
        setAccountNameDropdown();
    }

    function resetField() {
        accountName.value = '';
        deposit.value = '';
    }

    submitDeposit.onclick = function () {
        const selectedAccountName = accountId1.value;
        const selectedDeposit = depositText1.value;
        const arrayIndex = bankAccount.accountInfoList.findIndex((obj) => obj.getAccountName() == selectedAccountName);
        if (arrayIndex >= 0)
            bankAccount.accountInfoList[arrayIndex].setdeposit(selectedDeposit);
        buttonShowHide('none');
        initialLoadShowHide('none', 3);
        loadListData();
    }

    submitDebit.onclick = function () {
        const selectedAccountName = accountId1.value;
        const selectedDebit = debitText1.value;
        const arrayIndex = bankAccount.accountInfoList.findIndex((obj) => obj.getAccountName() == selectedAccountName);
        if (arrayIndex >= 0)
            bankAccount.accountInfoList[arrayIndex].setdebit(selectedDebit);
        buttonShowHide('none');
        initialLoadShowHide('none', 3);
        loadListData();
    }


}