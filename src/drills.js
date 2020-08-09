require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

//1. Get all items that contan text
function searchGroceries(searchTerm) {
    knexInstance
      .select('grocery_id', 'name', 'price', 'category')
      .from('shopping_list')
      .where('name', 'ILIKE', `%${searchTerm}%`)
      .then(result => {
        console.log(result)
      })
  }
  
searchGroceries('Tofurkey');

//2. Get all items paginated
function paginateGroceries(pageNumber) {
    const productsPerPage = 6
    const offset = productsPerPage * (pageNumber - 1)
    knexInstance
      .select('grocery_id', 'name', 'price', 'category')
      .from('shopping_list')
      .limit(productsPerPage)
      .offset(offset)
      .then(result => {
        console.log(result)
      })
  }
  
  paginateGroceries(1)

//3.Get all items added after date
function dateAdded(daysAgo) {
    knexInstance
      .select('grocery_id', 'name', 'category', 'date_added')
      .from('shopping_list')
      .where('date_added', '>', knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo))
      .then(result => {
        console.log(result)
      })
  }
  dateAdded(5)


  //4. the total cost for each category
  
function totalCost() {
    knexInstance
      .select('category')
      .sum('price as total')
      .from('shopping_list')
      .groupBy('category')
      .then(result => {
        console.log(result)
      })
  }
  
  totalCost()