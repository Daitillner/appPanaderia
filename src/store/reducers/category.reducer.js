import { CATEGORIES } from "../../data/categories";

const initialState = {
    categories: CATEGORIES,
    select: null,

};

const CategoryReducer = (state = initialState, action) => {
    return state;
};

export default CategoryReducer; 