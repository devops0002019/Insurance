/* ==========================================================
NAVBAR
========================================================== */
// 1. Inject navbar Data
const navbar_data = [
	{
		
		brand:"Insurance",
		
		url1:"index.html",
		txt1:"Health Insurance",
		
		url2:"car.html",
		txt2:"Car Insurance",
		
		url3:"life.html",
		txt3:"Life Insurance",
		
	}
];
// 1. Build navbar Template
function navbar_template(nav) {
	return `
	<div class="navbar">
 
		<figure class="brand with-text">
			<a href="index.html">
				<h1> ${nav.brand} </h1>
			</a>
		</figure>

		<label for="toggle" class="burger"></label>
		<input type="checkbox" name="toggle" id="toggle" class="toggle">
	
		<ul class="menu">
			<li><a href=" ${nav.url1} "> ${nav.txt1} </a></li>
            <li><a href=" ${nav.url2} "> ${nav.txt2} </a></li>
            <li><a href=" ${nav.url3} "> ${nav.txt3} </a></li>
		</ul>
	</div>
  `
}
// 1. Display navbar in the DOM
document.getElementById("navbar").innerHTML = `${navbar_data.map(navbar_template).join('')};`;



/* ==========================================================
FOTTER
========================================================== */
// Inject Data
const footer_data = [
	{
		url1:	  ["https://www.facebook.com"],
		txt1: 	  ["www.mylinks.com"],

		url2:	  ["https://www.facebook.com"],
		txt2: 	  ["www.mylinks.com"],

		url3:	  ["https://www.facebook.com"],
		txt3: 	  ["www.mylinks.com"],

		url4:	  ["https://www.facebook.com"],
		txt4: 	  ["www.mylinks.com"],
    },
];
// Build Template
function footer_template(foot) {
 	return `
	<div class="grid set-cols-4">

		<ul class="column">
			<li><a href="${foot.url1}">${foot.txt1}</a></li>
		</ul>
		<ul class="column">
			<li><a href="${foot.url3}">${foot.txt2}</a></li>
		</ul>
		<ul class="column">
			<li><a href="${foot.url4}">${foot.txt3}</a></li>
		</ul>
		<ul class="column">
			<li><a href="${foot.url4}">${foot.txt4}</a></li>
		</ul>

   `
  ;	
}
// Display html in the DOM | Control Layout (columns)
document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;