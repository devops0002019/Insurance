// Inject Data
const columns_data = [
	{
		brand:            ["https://learnwebcode.github.io/json-example/images/cat-2.jpg"],

		socialMedial: 	  ["Social Media"],
		facebook: 	  	  ["fab fa-facebook"],
		facebookURL:	  ["https://www.facebook.com"],
		instagram: 	  	  ["fab fa-instagram"],
		instagramURL:	  ["https://www.instagram.com"],
		twitter: 	  	  ["fab fa-twitter"],
		twitterURL:		  ["https://www.twitter.com"],
		yelp: 	 	  	  ["fab fa-yelp"],
		yelpURL:		  ["https://www.yelp.com"],

		ourMission:    	  ["Our Mission"],
		statement:        ["lorem ipsom text goes since always"],

		quickLinks:       ["Quick Links"],
		listIcon: 	  	  ["fa fa-angle-right"],
		linkUrl1:	  	  ["https://www.facebook.com"],
		linkLabel1: 	  ["www.mylinks.com"],
		
		first_page:		  ["Home"],
		first_page_url:	  ["index.html"],
		second_page:	  ["About Us"],
		second_page_url:  ["about-us.html"],
		thirth_page:	  ["Services"],
		thirth_page_url:  ["service.html"],
		fourth_page:	  ["contact Us"],
		fourth_page_url:  ["contact-us.html"],
		
		brandContact:	  ["www.mybrand.com"],
		brandName:	      ["Brand Inc"],
		brandEmail:       ["brand@gmail.com"],
		brandPhone:	      ["1 954 555 5555"],

	
    },
];



// Build Template
function columns_template(column) {
 	return `
	<div class="grid set-cols-4">

		<ul class="column">
			<li> <img src="${column.brand}"> </li>
		</ul>

		<ul class="column">
			<li><h5>${column.socialMedial}</h5> </li>
			<li><a href="${column.facebookURL}"><i class="${column.facebook}"></i></a></li>
			<li><a href="${column.instagramURL}"><i class="${column.instagram}"></i></a></li>
			<li><a href="${column.twitterURL}"><i class="${column.twitter}"></i></a></li>
			<li><a href="${column.yelpURL}"><i class="${column.yelp}"></i></a></li>
		</ul>

		<ul class="column">
			<li><h5>${column.quickLinks}</h5></li>
			<li><a href="${column.linkUrl1}"><i class="${column.listIcon}"></i>${column.linkLabel1}</a></li>
		</ul>

		<ul class="column">
			<li><h5>${column.ourMission}</h5></li>
			<li><p>${column.statement}</p></li>
		</ul>

		<ul class="column fullrow">
			<li><a href="${column.first_page_url}">${column.first_page}</a></li>
			<li><a href="${column.second_page_url}">${column.second_page}</a></li>
			<li><a href="${column.thirth_page_url}">${column.thirth_page}</a></li>
			<li><a href="${column.fourth_page_url}">${column.fourth_page}</a></li>
		</ul>
		<ul class="column fullrow">
			<li><a href="${column.brandContact}">${column.brandName}</a></li>
			<li><a href="${column.brandContact}">${column.brandEmail}</a></li>
			<li><a href="${column.brandContact}">${column.brandPhone}</a></li>
		</ul>
	</div>
  `
 ;	
}

// Display html in the DOM | Control Layout (columns)
document.getElementById("footer").innerHTML = `${columns_data.map(columns_template).join('')}`;