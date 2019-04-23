// 1. Inject Json Data
const uiLiterals = [
	{
		name:"item 1",
		description:"description 1",
        img:"http://i74.photobucket.com/albums/i241/cmucam/tennisball_zps93bb0163.jpg"
	},
	{
		name:"item 2",
		description:"description 2",
        img:"http://i74.photobucket.com/albums/i241/cmucam/tennisball_zps93bb0163.jpg"
	},
	{
		name:"item 3",
		description:"description 3",
        img:"http://i74.photobucket.com/albums/i241/cmucam/tennisball_zps93bb0163.jpg"
	},
]








// 2. Build the Template
function uiLiteralsTemplate(literals) {
	return `
 	<div class="column literals">
		<img src="${literals.img}">
		<h2>${literals.name}</h2>
		<h3>${literals.description}</h3>
 	</div>
	
	`
}







// 3. Display Template in the DOM
document.getElementById("uiLiterals").innerHTML = `
  <div class="grid set-cols-1">
	<div class="column fullrow">
		<h1>Items (${uiLiterals.length} Resuls)</h1>
	</div>

	${uiLiterals.map(uiLiteralsTemplate).join('')}

	<div class="column fullrow">
		<h6>These ${uiLiterals.length} items were added recently. Check back soon for updates.</h6>
	</div>
   </div>
`;