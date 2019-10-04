let listCutomer = []
let checkDeleteCustomer = false;
let checkEditCustomer = false;
let checkDisplayTotalPay = false;
let validateBirthday = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
let validateEmail = /^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
function displayMaimenu() {
    let choose = prompt(
        "1. Add new customer" +
        "\n2.Display Information Customer" +
        "\n3.Edit Information Customer" +
        "\n4.Delete Customer" +
        "\n5.Choose Display Total Pay" +
        "\n6. Exit."
    );
    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomers();
            break;
        case "3":
            chooseTotalPay();
            break;
        case "4":
            chooseCutomerEdit();
            break;
        case "5":chooseDeleteCustomer();
            break;
        case "6":
            return;
        default:
            alert("Faill!!");
            break;

    }
}

function  addNewCustomer() {
    let checkBirthday = false;
    let checkEmail = false;
    let cus = new Customer();
    cus.setNameCustomer(prompt("Enter Customer's Name:"));
    cus.setIdCard(prompt("Enter Customer's Id card"));
    do{
    cus.setBirthdayCustomer(prompt("Enter Customer's Birthday (dd/MM/YYYY) "));
    if(validateBirthday.test(cus.getbirthdayCustomer())){
    checkBirthday = true;
    }else{
        alert("Birthday is invalid. Please try again")
    }
    }
    while (!checkBirthday);
    do {
        cus.setEmailCustomer(prompt("Enter Customer's Email"));
        if (validateEmail.test(cus.getbirthdayCustomer())) {
            checkEmail = true;
        } else {
            alert("Your Email Not True. Please Try Again")
        }
    }
    while (!checkEmail);
    cus.setAddressCustomer(prompt("Enter Customer's Address"));
    cus.setTypeCustomer(prompt("Enter Type Customer"));
    cus.setDiscount(prompt("Enter Discount"));
    cus.setNumberOfAcccompanying(prompt("Enter Number Of Accompanying"));
    cus.setTypeRoom(prompt("Enter Type Room"));
    cus.setRentDays(prompt("Enter NumBer Of Days Rented"));
    cus.setTypeServiece(prompt("Enter Type Service"));
    listCutomer.push(cus);
    displayMaimenu();
}
function displayCustomers() {
    let result = "";
    for (var i = 0; i < listCustomer.length; i++) {
        result += "\n" + (i + 1) + "." + "Name: " + listCustomer[i].getNameCustomer() +
            "; Id Card: " + listCustomer[i].getIdCard();
    }
    result += "\n" + (listCustomer.length + 1) + ".Back to menu.";
    let chooseDisplayInfo = prompt(result);
    if (chooseDisplayInfo.toString() !== (listCustomer.length + 1).toString()) {
        if(!checkDeleteCustomer && !checkDisplayTotalPay) {
            displayInformationCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        }else if(checkDeleteCustomer){
           deleteCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        }else {
            displayTotalPay(Number.parseInt(ChooseDisplayInfo) - 1);
        }
    } else {
        checkDisplayTotalPay = false;
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        displayMainmenu();
    }
}


function displayInformationCustomer(index) {
    if (checkEditCustomer) {
        let chooseInfoEdit = prompt(
            "1.Name : " + listCustomers[index].getNameCustomer() +
            "\n2.Id card : " + listCustomers[index].getIdCard() +
            "\n3.Birthday : " + listCustomers[index].getbirthdayCustomer() +
            "\n4.Email : " + listCustomers[index].getEmailCustomer() +
            "\n5.Address :" + listCustomers[index].getAddressCustomer() +
            "\n6.Type Customer :" + listCustomers[index].gettypeCustomer() +
            "\n7.Discount :" + listCustomers[index].getDiscount() +
            "\n8.Accompanying :" + listCustomers[index].getNumberOfAccompanying() +
            "\n9.Type Room :" + listCustomers[index].getTypeRoom() +
            "\n10.Rent Day :" + listCustomers[index].getRentDays() +
            "\n11.Type Sevrice :" + listCustomers[index].getTypeServiece() +
            "\n12.Back."
        );
        if (chooseInfoEdit.toString() !== "12") {
            checkEditCustomer = false;
            editInformationCustomer(index,Number.parseInt(chooseInfoEdit) - 1);
        } else {
            displayCustomers();
        }
    } else {
        alert("Information of customer:\n" +
            "1.Name : " + listCustomers[index].getNameCustomer() +
        "\n2.Id card : " + listCustomers[index].getIdCard() +
        "\n3.Birthday : " + listCustomers[index].getbirthdayCustomer() +
        "\n4.Email : " + listCustomers[index].getEmailCustomer() +
        "\n5.Address :" + listCustomers[index].getAddressCustomer() +
        "\n6.Type Customer :" + listCustomers[index].gettypeCustomer() +
        "\n7.Discount :" + listCustomers[index].getDiscount() +
        "\n8.Accompanying :" + listCustomers[index].getNumberOfAccompanying() +
        "\n9.Type Room :" + listCustomers[index].getTypeRoom() +
        "\n10.Rent Day :" + listCustomers[index].getRentDays() +
        "\n11.Type Sevrice :" + listCustomers[index].getTypeServiece()
        );
        displayCustomers();

    }
}

function chooseTotalPay(){
    checkDisplayTotalPay = true;
    displayCustomers();

}
function displayTotalPay(index) {
    alert(listCutomer[index].totalPays());
    checkDisplayTotalPay = false
}
function chooseCutomerEdit() {
    checkEditCustomer = true;
    displayCustomers();


}
function editInformationCustomer(indexCus,indexPropety) {
    let editInfo = prompt("Enter Info You Want Change: ");
    switch (indexPropety) {
        case 0:
            listCustomers[indexCus][0] = editInfo;
            break;
        case 1:
            listCustomers[indexCus][1] = editInfo;
            break;
        case 2:
            listCustomers[indexCus][2] = editInfo;
            break;
        case 3:
            listCustomers[indexCus][3] = editInfo;
            break;
        case 4:
            listCustomers[indexCus][4] = editInfo;
            break;
        case 5:
            listCustomers[indexCus][5] = editInfo;
            break;
        case 6:
            listCustomers[indexCus][6] = editInfo;
            break;
        case 7:
            listCustomers[indexCus][7] = editInfo;
            break;
        case 8:
            listCustomers[indexCus][8] = editInfo;
            break;
        case 9:
            listCustomers[indexCus][9] = editInfo;
            break;
        case 10:
            listCustomers[indexCus][10] = editInfo;
            break;
        default:
            alert("Fail!!");
            return;
    }
    checkEditCustomer = false;
    displayMainmenu();

}
function chooseDeleteCustomer() {
    checkDeleteCustomer = true;
    displayCustomers();

}
function deleteCustomer(index) {
    let chooseConfirm = prompt(
        "Are you sure delete Customer: Name: " + listCustomers[index][0] +
        "; Id Card: " + listCustomers[index][1] +
        "\n1.yes\n2.no");
    if (chooseConfirm ==="1"){
        listCustomers.splice(index,1);
        alert("Delete Complete!!");
    }
    checkDeleteCustomer = false;
    displayMainmenu();


}

displayMaimenu();
