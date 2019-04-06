const description = [" A pleasant aroma and taste of tropical berries. It is known for its unique sweet taste and because it is an equal hybrid, the effects are both mind and body. Flowering time for this plant is approximately 8-9 weeks.", "Earthy flavors soured by skunky, fruity notes arrive on the inhale, making their exit with the taste of hashy spice.", "Hybrid effects fuel a stimulated mental state that bursts through the body, leaving relaxation in the limbs.  Fruity with a dull sweetness, akin to a pear", "The dense, sticky buds have an intense smell of sweet fruits mixed with pine and eucalyptus trees. The cerebral high comes on quick and leaves consumers feeling uplifted and euphoric while reducing stress and relaxing the mind.","The hefty sativa buds give earthy, sweet coffee flavors that provide a dreamy, cerebral effect.  A noticeable sweet, berry fragrance with hints of earth and spice." ]

export const getRandomDescription = () => {
  const randomIndex = Math.floor(Math.random() * description.length)
  return description[randomIndex]
}
