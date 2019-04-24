/* ==========================================================
NAVBAR
========================================================== */
// 1. Inject navbar Data
const navbarData = [
	{
		
		brand:"UI-3",
		
		URL1:"index.html",
		url1:"HOME",
		
		URL2:"about-us.html",
		url2:"ABOUT US",
		
		URL3:"inventory.html",
		url3:"INVENTORY",
		
		URL4:"contact-us.html",
		url4:"CONTACT US"
	}
];
// 1. Build navbar Template
function navbarTemplate(item) {
	return `
	<div class="navbar">

		<figure class="brand with-text">
			<a href="#">
				<h1> ${item.brand} </h1>
			</a>
		</figure>

		<label for="toggle" class="burger"></label>s
		<input type="checkbox" name="toggle" id="toggle" class="toggle">
	

		<ul class="menu">
			<li><a href=" ${item.URL1} "> ${item.url1} </a></li>
			<li><a href=" ${item.URL2} "> ${item.url2} </a></li>
		</ul>
	</div>
  `
}
// 1. Display navbar in the DOM
document.getElementById("navbar").innerHTML = `${navbarData.map(navbarTemplate).join('')};`;



/* ==========================================================
FOTTER
========================================================== */
// Inject Data
const columns_data = [
	{
		quickLinks:       ["Quick Links"],
		listIcon: 	  	  ["fa fa-angle-right"],
		linkUrl1:	  	  ["https://www.facebook.com"],
		linkLabel1: 	  ["www.mylinks.com"],
    },
];
// Build Template
function columns_template(column) {
 	return `
	<div class="grid set-cols-41">

		<ul class="column">
			<li><h5>${column.quickLinks}</h5></li>
			<li><a href="${column.linkUrl1}"><i class="${column.listIcon}"></i>${column.linkLabel1}</a></li>
		</ul>

   `
  ;	
}
// Display html in the DOM | Control Layout (columns)
document.getElementById("footer").innerHTML = `${columns_data.map(columns_template).join('')}`;