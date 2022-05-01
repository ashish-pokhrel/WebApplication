window.onload = function () {
    const create = document.getElementById("create-Id");
    const deposit = document.getElementById("deposit-Id");
    const accountName = document.getElementById("accountName");
    const listData = document.getElementById("listData-Id");
    const localStorageKey = "listDataKey";

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

        getListOfData() {
            return "Account Name: " + this.#accountName + " Balance: " + this.#deposit + "\n";
        }
    }
    var bankAccount = new BankAccount();
    create.onclick = function () {
        const name = accountName.value;
        const depositAmount = deposit.value;
        bankAccount.createBankAccount(name, depositAmount);
        loadListData();
    }

    function loadListData() {
        let finalListData = "";
        for (const x of bankAccount.accountInfoList) {
            finalListData += x.getListOfData();
        }
        listData.value = finalListData;
    }
}