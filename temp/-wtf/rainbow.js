/* ===============================
	Анимация радуги
   =============================== */
let sect = document.querySelector("#face");
let rainbow = [];
let clrs = {
	0: "red",
	1: "orange",
	2: "yellow",
	3: "green",
	4: "blue", 
	5: "darkBlue",
	6: "purple"
}
for(let i = 0; i < 7;i++){
	color = document.createElement('div');
	color.style.backgroundColor = clrs[i];
	color.style.height = 30 + 'px';
	color.style.width = 4 + 'px';
	rainbow.push(color);
	//console.log(rainbow, color.style.backgroundColor);
}

window.onload = function() {
	for(color of rainbow){
		sect.append(color);
	}
}

sect.addEventListener("click", function() {
	for(let color of rainbow)
	{
		color.style.height = 30 + 'px';
		color.style.width = 10 + 'px';
	}
	for(let i = 0; i < 7; i++)
	anime({
	targets: rainbow[i],
	width: '75%', 
	easing: 'easeInOutQuad',
  	direction: 'alternate',
  	delay: 100*i,
  	endDelay:300,
  	loop: 1
	})
}); 