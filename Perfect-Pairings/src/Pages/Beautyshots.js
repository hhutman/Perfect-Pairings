const beautyShots = ["https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"]

export const getRandomBeautyShots = () => {
  const randomIndex = Math.floor(Math.random() * beautyShots.length)
  console.log(randomIndex)
  return beautyShots[randomIndex]
}
