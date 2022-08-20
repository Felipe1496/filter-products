import { Category } from "models/category/category";
import Products from "data/productsCategory.json";

function useCategories(): Category[] {
  const productsData = Products.data.nodes;
  const categoriesData: Category[] = [];

  productsData.forEach((product) => categoriesData.push(product.category));

  const uniqueIds: string[] = [];

  const noRepeatedCategories: Category[] = categoriesData.filter((category) => {
    const isDuplicate = uniqueIds.includes(category._id);

    if (!isDuplicate) {
      uniqueIds.push(category._id);
      return true;
    }

    return false;
  });

  return noRepeatedCategories;
}

/* const arr = [
  {id: 1, name: 'Tom'},
  {id: 1, name: 'Tom'},
  {id: 2, name: 'Nick'},
  {id: 2, name: 'Nick'},
];

const uniqueIds = [];

const unique = arr.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id);

  if (!isDuplicate) {
    uniqueIds.push(element.id);

    return true;
  }

  return false;
});

[{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]
console.log(unique);
*/

export { useCategories };
