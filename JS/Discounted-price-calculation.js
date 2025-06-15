const getDiscountedPrice = (originalPrice, discountPercent) => {
  return (originalPrice * (1 - discountPercent / 100)).toLocaleString();
};

console.log(getDiscountedPrice(18700, 20)+"원"); 
