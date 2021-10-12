const mealIds = [52768,52776,52765,52935,52960,52962];

export const fetchMealData = async () => {
    let responseArr = [];

    mealIds.forEach(async (mealId) => {
        const response = await fetch(`${baseUrl}${mealId}`); 
        const mealData = await response.json();
        responseArr.push(mealData);    

    })
    
    console.log(responseArr);
  };
