//your JS code here. If required.

const button = document.querySelector('input[type="button"]');
button.addEventListener("click" , () => {
	const select = document.getElementById("colorSelect");
	const selectedIndex = select.selectedIndex;

	if(selectedIndex !== -1){
		select.remove(selectedIndex);
	};
});