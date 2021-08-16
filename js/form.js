const form = document.getElementById("troubleshooting_form");
let errors_html = [];

const clearErrorState = () => {
    errors_html = [];
    let errors = document.getElementById("errors");
    errors.style.display = "none";
    document.getElementById("primary_email").style.border = "1px solid #ced4da";
    document.getElementById("linked_email_address").style.border = "1px solid #ced4da";
    for (var i = 1; i <= 24; i++) {
        let id = `email_user_${i}`;
        document.getElementById(id).style.border = "1px solid #ced4da";
    } 
}

const validateForm = () => {
	clearErrorState();
    
	let primaryEmail = document.getElementById("primary_email").value;
	let yesOtherEmail = document.getElementById("yes_other_email");
	let linked_email = document.getElementById("linked_email_address").value;
    let yesMoreUsers = document.getElementById("yes_more_email_users");
	if (primaryEmail === "") {
		errors_html.push(document.getElementById("errors").innerHTML = "Please enter your primary email address");
		document.getElementById("primary_email").style.border = "1px solid red";
		errors.style.display = "block";
		errors.scrollIntoView();
	}
	if (yesOtherEmail.checked === true) {
		if (linked_email === "") {
			document.getElementById("linked_email_address").style.border = "1px solid red";
			errors_html.push(document.getElementById("errors").innerHTML = "Please enter your linked email address");
			errors.style.display = "block";
			errors.scrollIntoView();
		}
	}
    // first 12 email section validation
    let firstSectionmissingFields = [];
    let secondSectionmissingFields = [];
    let users_error = [];
    for (var i = 1; i <= 12; i++) {
        let id = `email_user_${i}`;
        let value = document.getElementById(id).value;
        if (value == "") {
            firstSectionmissingFields.push(i);
            document.getElementById(id).style.border = "1px solid red";
			users_error.push(document.getElementById("errors").innerHTML = `Please re-enter email users in the right order (Email User ${firstSectionmissingFields.toString()} is missing)`);
			errors.style.display = "block";
			errors.scrollIntoView();
        }
    }
    if (users_error.length >= 1) {
        errors_html.push(users_error[users_error.length-1]);
    }

    // Checking if they checked the more users field
    if (yesMoreUsers.checked === true) {
        let more_users_error = [];
        for (var i = 13; i <= 24; i++) {
            let id = `email_user_${i}`;
            let value = document.getElementById(id).value;
            if (value == "") {
                secondSectionmissingFields.push(i);
                document.getElementById(id).style.border = "1px solid red";
                more_users_error.push(document.getElementById("errors").innerHTML = `Please re-enter email users in the right order (Email User ${secondSectionmissingFields.toString()} is missing)`);
                errors.style.display = "block";
                errors.scrollIntoView();
            }
        }
        if (more_users_error.length >= 1) {
            errors_html.push(more_users_error[more_users_error.length-1]);
        }
        
	}

    let errors_list = "";
    for (error in errors_html) {
        errors_list += "<li>" +  errors_html[error] + "</li>";
        document.getElementById("errors").innerHTML = errors_list;
    }

    if (errors_html.length === 0) {
        //send email to server
        // document.getElementById("success").style.display = "block";
        return true;
    } else {
        return false;
    }
}
