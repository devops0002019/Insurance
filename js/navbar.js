// 1. Inject navbar Data
const navbarData = [
	{
		Hours:"Mon - Sat - 9am-10pm",
		phones:"+1 (555).555.5555",
		email:"company@gmail.com",
		
		brand1:"src/img/logo.png",
		brand2:"brand",
		
		router1:"index.html",
		label1:"HOME",
		
		router2:"about-us.html",
		label2:"ABOUT US",
		
		router3:"inventory.html",
		label3:"INVENTORY",
		
		router4:"contact-us.html",
		label4:"CONTACT US"
	}
];
// 1. Build navbar Template
function navbarTemplate(item) {
	return `
		<div class="topbar" id="topbar">
			<ul>
				<li>
					<i class="fa fa-calendar"></i>
					<p> ${item.Hours} </p>
				</li>
				<li>
					<i class="fa fa-phone"></i>
					<p> ${item.phones} </p>
				</li>
				<li>
					<i class="fa fa-envelope"></i>
					<p> ${item.email} </p>
				</li>
			</ul>
		</div>
		<div class="navbar">
			<figure class="brand with-logo">
				<a href="#">
					<img src="${item.brand1}" alt="logo">
                    <h1> ${item.brand2} </h1>
				</a>
			</figure>
			<input type="checkbox" id="toggle" class="toggle">
			<label for="toggle" class="burger"><span></span></label>
			<ul class="menu">
				<li>
					<a href=" ${item.router1} "> ${item.label1} </a>
				</li>
				<li>
					<a href=" ${item.router2} "> ${item.label2} </a>
				</li>
				<li>
					<a href=" ${item.router3} "> ${item.label3} </a>
				</li>
				<li>
					<a href=" ${item.router4} "> ${item.label4} </a>
				</li>
			</ul>
		</div>
	`
}
// 1. Display navbar in the DOM
document.getElementById("navbar").innerHTML = `${navbarData.map(navbarTemplate).join('')};`;








