var empData = {};
var getEmpData = () => {
    empData.name = document.querySelector('#ename').value;
    // console.log(empData.name);
    empData.department = document.querySelector('#edept').value;   
    empData.age = document.querySelector('#eage').value;
    // empData.gender = document.querySelectorAll("input[type ='radio':checked ").value;
    empData.gender = document.querySelectorAll(".egend").checked;
    empData.basicSal = parseInt( document.querySelector('#ebSal').value );
    console.log(empData);
    
    calSalary();
}
var calSalary = () =>{
    empData.hra = (24/100)*empData.basicSal;
    empData.pf = (14* empData.basicSal)/100;
    empData.TotalSal = empData.basicSal + empData.hra + empData.pf;
    console.log(empData);
    // calTaxForMale();
    showDataToUser();
}
// var calTaxForMale = () =>{
//     if(empData.gender === "male"){
//         if (empData.totalSalary >= 500000) {
//             taxAbove5L = (15* empData.totalSalary)/100;
//             console.log("tax percentage is 15% " + "=" + taxAbove5L);
            
//         } else if (empData.totalSalary >= 300000) {
//             taxAbove3L = (10* empData.totalSalary)/100;
//             console.log("tax percentage is 10% " + "=" + taxAbove3L);
            
//         } else if (empData.totalSalary >= 100000) {
//             taxAbove1L = (5* empData.totalSalary)/100;
//             console.log("tax percentage is 5% " + "=" + taxAbove1L);
//         } else {
//             console.log("Yod need not pay any tax");
//         }
        
//     }
// }
var showDataToUser = () =>{
    document.querySelector(".showDataBackToUser").style.display = 'block';
    for (var tempKey in empData) {
        if (tempKey != "department" && tempKey != 'age' ) {
            var id = '#Emp'+ tempKey;
            // console.log(tempKey);
            console.log(empData[tempKey]);
             console.log(id);
            document.querySelector(id) . innerHTML = empData[tempKey];
        }  
     }
}
var DataValidation = (event) =>{
    // console.log(event);
    
    if (event.charCode >= 65 && event.charCode <= 90 || event.charCode == 32) {
        document.querySelector('#Name').style.display = 'none';
        return true;
    }else{
        document.querySelector('#Name').style.display = 'Block';
        return false;
    }
    
}
var dataValidForSal = (event) =>{
    console.log(event);
    if (event.charCode >= 48 && event.charCode <= 57 ) {
        document.querySelector('#Rs').style.display = 'none';
        return true;
    }else{
        document.querySelector('#Rs').style.display = 'Block';
        return false;
    }
}