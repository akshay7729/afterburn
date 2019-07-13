import { CATEGORIES } from '../shared/categoriesDate'
import { PRODUCTSLIST } from '../shared/ProductsListData'

export const initialState = {
    categories : CATEGORIES,
    products: PRODUCTSLIST,
    urlParams:''
}

export const Reducer = (state = initialState, action) => {
    return state;
}