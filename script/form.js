const msgStatus = document.querySelector(".msg-status");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

console.log(document.location.search);

if (document.location.search === "?mail_status=sent") {
	msgStatus.classList.add("succcess");
	msgStatus.textContent = "wiadomość wysłana";

	setTimeout(() => {
		msgStatus.classList.remove("success");
	}, 3000);
}
