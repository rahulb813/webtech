document.write("JavaScript execution begins: </br>")
function person(FirstName, LastName, OfficeAddress) {
    this.FirstName = FirstName,
        this.LastName = LastName,
        this.OfficeAddress = OfficeAddress
}
var Person1 = new person("Franklin", "Clinton", "3671 Whispymound Drive, Los Santos");
var Person2 = new person("Micheal", "De Santa", "Street 12 Rockford Hills, Los Santos");
var Person3 = new person("Trevor", "Philips", "Zancudo Avenue, Sandy Shores, Los Santos");
console.log("Person 1: ")
console.log("FirstName: " + Person1.FirstName)
console.log("LastName: " + Person1.LastName)
console.log("OfficeAddress: " + Person1.OfficeAddress)
console.log("Person 2: ")
console.log("FirstName: " + Person2.FirstName)
console.log("LastName: " + Person2.LastName)
console.log("OfficeAddress: " + Person2.OfficeAddress)
console.log("Person 3: ")
console.log("FirstName: " + Person3.FirstName)
console.log("LastName: " + Person3.LastName)
console.log("OfficeAddress: " + Person3.OfficeAddress)
document.write("Person 1: " + "</br>")
document.write("FirstName: " + Person1.FirstName + "</br>")
document.write("LastName: " + Person1.LastName + "</br>")
document.write("OfficeAddress: " + Person1.OfficeAddress + "</br>" + "</br>")
document.write("Person 2: " + "</br>")
document.write("FirstName: " + Person2.FirstName + "</br>")
document.write("LastName: " + Person2.LastName + "</br>")
document.write("OfficeAddress: " + Person2.OfficeAddress + "</br>" + "</br>")
document.write("Person 3: " + "</br>")
document.write("FirstName: " + Person3.FirstName + "</br>")
document.write("LastName: " + Person3.LastName + "</br>")
document.write("OfficeAddress: " + Person3.OfficeAddress + "</br>" + "</br>")