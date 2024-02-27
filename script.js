/*


Ordenar un array de objetos por una de sus propiedades: sort.
Dado un array de productos, escriba una función para ordenarla por una propiedad variable. Suponga que cada producto tendrá únicamente las propiedades name y category.
	Nota: Tenga en cuenta que sort modifica el array original.
	const products = [
 { name: 'roomba', category: 'home' },
  		  	{ name: 'iPad', category: 'electronics' },
  		  	{ name: 'lego Star Wars', category: 'toys' },
	];


*/
const products = [
{ name: 'roomba', category: 'home' },
{ name: 'iPad', category: 'electronics' },
{ name: 'lego Star Wars', category: 'toys' },
	];


const orderedProducts = products.sort(function (a,b){

if (a.name > b.name) {
        return  1;
    }
    //if(a.)    
    if (a.name < b.name) {
        return -1;
        }
        // a must be equal to b
        return 0;
    })


    console.log(products);


    //coche["color"]- es otra forma de llamar a la prorpiedad.
products.sort(a,b){

if (a.name > b.name) {
        return  1;
    }
    //if(a.)    
    if (a.name < b.name) {
        return -1;
        }
        // a must be equal to b
        return 0;
}
    
 //----Solución de Alejandro


// Field puede ser name o category
function sortByKey(field) {
    const products = [
      { name: "roomba", category: "home" },
      { name: "iPad", category: "electronics" },
      { name: "lego Star Wars", category: "toys" },
    ];
    // sort by name
    products.sort((a, b) => {
      const nameA = a[field].toUpperCase(); // ignore upper and lowercase
      const nameB = b[field].toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
  
      // names must be equal
      return 0;
    });
  return products;
  }
  
  sortByKey("name");
  sortByKey("category");