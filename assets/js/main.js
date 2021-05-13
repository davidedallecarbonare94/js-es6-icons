/* 
Milestone 1:
Partendo dalla seguente struttura dati, 
//mostriamo in pagina tutte le icone disponibili come da layout.


Milestone 2 Coloriamo le icone per tipo


Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
Usate questa struttura dati per le icone:
*/

let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//Milestone 2 Coloriamo le icone per tipo

icons.forEach(icon => {
    icon.color = "";
    if (icon.type === "animal") {
        icon.color = "blue"
    } else if (icon.type === "vegetable") {
        icon.color = "orange"
    } else if (icon.type === "user"){
        icon.color = "purple"
    }
})
console.log(icons);
/* 
Partendo dalla seguente struttura dati, 
//mostriamo in pagina tutte le icone disponibili come da layout. */

icons.forEach((icon) => {
    document.getElementById("icon_container").insertAdjacentHTML("beforeend",
    `
    <div class="icons">
    <i class="${icon.family} ${icon.prefix}${icon.name}" style="color: ${icon.color};"></i>
    <h3>${icon.name}</h3>
    </div>
    `)
});





