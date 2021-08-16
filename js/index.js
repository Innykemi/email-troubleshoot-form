function myFunction() {
	let radio = document.getElementById("yes_other_email");
	let linked_email = document.getElementById("linked_email");
	if (radio.checked === true){
	  linked_email.style.display = "block";
	} else {
	   linked_email.style.display = "none";
	}
}
function moreUsers() {
	let more_users = document.getElementById("yes_more_email_users");
	let more_email_users = document.getElementById("more_email_users");
	if (more_users.checked === true){
		more_email_users.style.display = "block";
	} else {
	   more_email_users.style.display = "none";
	}
}
