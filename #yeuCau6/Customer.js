let Customer = function () {

    this.setNameCustomer = function (nameCustomer) {
        this.nameCustomer = nameCustomer;

    };
    this.getNameCustomer = function () {
        return this.nameCustomer;

    };
    this.setIdCard = function (idCard) {
        this.idCard = idCard;

    };
    this.getIdCard = function () {
        return this.idCard;

    };
    this.setBirthdayCustomer = function (birthdayCustomer) {
        this.birthdayCustomer = birthdayCustomer;

    };
    this.getbirthdayCustomer = function () {
        return this.birthdayCustomer;

    };
    this.setEmailCustomer = function (emailCustomer) {
        this.emailCustomer = emailCustomer;

    };
    this.getEmailCustomer = function () {
        return this.emailCustomer;

    };
    this.setAddressCustomer = function (addressCustomer) {
        this.addressCustomer = addressCustomer;

    };
    this.getAddressCustomer = function () {
        return this.addressCustomer;

    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;

    };
    this.gettypeCustomer = function () {
        return this.typeCustomer;



    };
      this.setDiscount = function (discount) {
        this.discount = discount;

    };
    this.getDiscount = function () {
        return this.discount;

    };
    this.setNumberOfAcccompanying = function (numberOfAccompanying) {
        this.numberOfAccompanying = numberOfAccompanying;

    };
    this.getNumberOfAccompanying = function () {
        return this.numberOfAccompanying;

    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;

    };
     this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.setRentDays = function (rentDays) {
        this.rentDays = rentDays;

    };
    this.getRentDays = function () {
        return this.rentDays;
    };
    this.setTypeServiece = function (typeServiece) {
        this.typeServiece = typeServiece;

    };
    this.getTypeServiece = function () {
        return this.typeServiece;
    };
    this.totalPays = function () {
        let  moneyPerDays = 0;
        if(this.getTypeServiece() === "Villa"){
            moneyPerDays = 500;
        }
        else if(this.getTypeServiece() === Villa){
            moneyPerDays = 300;
        }
        else{
            moneyPerDays = 200;
        }
        return moneyPerDays * parseFloat(this.getRentDays())*(1 - parseFloat(this.getDiscount())/100);


    }



};