function validateForm() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;   
    var password = document.getElementById('password').value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var qualification = document.getElementById("qualification").value;
    var address = document.getElementById("address").value;
   
    var specializations = document.getElementsByName("specializations[]");
    var qualificationError = document.getElementById("qualificationError");
  
    var errors = [];

    if (firstname.trim() === '') {
        errors.push('Firstname is required.');
    }
    if (lastname.trim() === '') {
        errors.push('Lastname is required.');
    }
    
    if (email.trim() === '') {
        errors.push('Email is required.');
    }
    if (city.trim() === "") {
        errors.push("Please enter your city");
    }
    
    if (!/^\d{10}$/.test(mobile)) {
        errors.push("Invalid mobile number (10 digits only)");
    }
    
    if (gender === "") {
        errors.push("Please select a gender");
    }
    
    if (dob === "") {
        errors.push("Please enter your date of birth");
    }
    
    if (address.trim() === "") {
        errors.push("Please enter your address");
    }
    
    if (qualification === "") {
        
        errors.push("Please select at least one qualification");
        
        if (qualificationError) {
            qualificationError.innerHTML = "Please select at least one qualification";
        }
    }
    

    var selectedSpecialization = Array.from(specializations).some(function(checkbox) {
        return checkbox.checked;
    });
    
    if (!selectedSpecialization) {
        errors.push("Please select at least one specialization");
    }

    if (password.trim() === '') {
        errors.push('Password is required.');
    }

   
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
    }

    
    return true;
}
