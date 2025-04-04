export const findCategoryId = (categories, term) => {
    for (const category of categories) {
      if (category.term === term) {
        return category.categoryId;
      }
      if (category.childCategoryList.length > 0) {
        const result = findCategoryId(category.childCategoryList, term);
        if (result) return result;
      }
    }
    return null;
  };
