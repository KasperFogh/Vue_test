class Model{
    constructor(FirstName, LastName, Email, PhoneNo){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.PhoneNo = PhoneNo;
    }

    getFirstName = function(){
        return this.FirstName;
    }
    getLastName = function(){
        return this.LastName;
    }
    getEmail = function(){
        return this.Email;
    }
    getPhoneNo = function(){
        return this.PhoneNo;
    }
    setFirstname = function(name){
        this.FirstName = name;
    }
    setLastName = function(name){
        this.LastName = name;
    }
    setEmail = function(email){
        this.Email = email;
    }
    setPhoneNo = function(phono){
        this.PhoneNo = phono;
    }

}
