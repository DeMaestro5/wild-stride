// app/data/mapping-guide/emergencyTips.ts

const emergencyTips = [
  {
    title: 'Lost? Follow STOP Protocol',
    description:
      "When you realize you're lost, the STOP protocol (Stop, Think, Observe, Plan) can help prevent panic and create a structured approach to regaining your bearings.",
    steps: [
      'Stop immediately and sit down. Resist the urge to keep moving, which often makes the situation worse.',
      "Think about where you last knew your position with certainty and any landmarks you've passed since then.",
      'Observe your surroundings carefully, looking for recognizable features that might be on your map.',
      'Pull out your map and try to match terrain features around you to determine your position.',
      "Plan your next move carefully, whether that's retracing your steps or finding a more prominent location.",
    ],
    caution:
      'Wandering randomly when lost can lead to exhaustion, injury, and moving further from known areas or rescue. Stay calm and methodical.',
  },
  {
    title: 'Sun Navigation Without Compass',
    description:
      'When your compass is lost or broken, the sun provides reliable directional information that can help you navigate to safety.',
    steps: [
      'Find a stick about 3 feet (1 meter) long and place it upright in a level spot where it casts a clear shadow.',
      'Mark the tip of the shadow with a small stone or twig, then wait 15-20 minutes.',
      'Mark the new position of the shadow tip with another stone.',
      'Draw or place a straight line between the two stones - this line runs approximately east-west, with the first mark being west.',
      'Stand with the first mark (west) to your left and the second mark (east) to your right - you are now facing approximately north.',
    ],
    caution:
      'This method provides approximate directions and becomes less accurate near noon or in locations far from the equator during summer/winter extremes.',
  },
  {
    title: 'Night Navigation Using Stars',
    description:
      'When traveling at night without a compass, celestial bodies can provide reliable navigation references to maintain your direction.',
    steps: [
      "In the Northern Hemisphere, locate the North Star (Polaris) by finding the Big Dipper and following the two 'pointer stars' at the edge of its bowl.",
      'The North Star remains in a fixed position in the night sky, always indicating true north.',
      'In the Southern Hemisphere, find the Southern Cross constellation and draw an imaginary line through its long axis about 4.5 times its length.',
      'Draw a perpendicular line from the Southern Cross to the bright star Achernar, and where these lines intersect approximates the South Celestial Pole.',
      'To maintain direction, pick a bright star aligned with your destination and walk toward it, selecting new alignment stars as they move across the sky.',
    ],
    caution:
      'Star navigation requires clear skies and basic knowledge of major constellations. Cloud cover can render this method unusable.',
  },
  {
    title: 'Using Linear Features to Regain Position',
    description:
      'When disoriented in the wilderness, intentionally navigating to a major linear feature like a river or road can help you reestablish your location.',
    steps: [
      "Identify the nearest major linear feature (river, road, power line, coastline) on your map that's larger than the distance you might have strayed.",
      'Determine the most efficient direction to travel to intersect this feature, considering terrain challenges.',
      'Travel in your chosen direction using the most reliable navigation method available (sun, consistent bearing, etc.).',
      'Once you reach the linear feature, determine whether to go left or right based on your map to reach a known location or landmark.',
      'Follow the feature until you reach an identifiable location where you can precisely fix your position on the map.',
    ],
    caution:
      'This method can require significant travel through unknown terrain. Consider carefully if you have sufficient supplies and daylight before committing.',
  },
  {
    title: 'Improvised Compass',
    description:
      'In a survival situation without a compass, you can create a basic magnetic compass using common items to help determine direction.',
    steps: [
      'Find a small piece of ferrous metal like a needle, safety pin, or razor blade and magnetize it by repeatedly stroking it in one direction with a magnet, silk, or even your hair.',
      'Place the magnetized metal on a small piece of leaf, cork, or other material that floats.',
      'Fill a small container with water and place your floating needle assembly on the surface.',
      "The magnetized metal will slowly orient itself to align with Earth's magnetic field, with one end pointing toward magnetic north.",
      'Once settled, mark or note which end points north (typically the end you stroked toward when magnetizing).',
    ],
    caution:
      "Improvised compasses are much less accurate than proper compasses and don't account for declination. Use for general direction only.",
  },
  {
    title: 'Natural Navigation Indicators',
    description:
      'When technological tools are unavailable, natural features can provide clues about direction to help maintain orientation or determine north/south.',
    steps: [
      "Observe vegetation patterns - in northern hemisphere areas, moss often grows more abundantly on the north side of trees where it's shadier and moister.",
      'Look at isolated tree growth - trees in open areas may have denser foliage on their southern side (northern hemisphere) due to more sunlight.',
      'Check snow melt patterns - south-facing slopes (northern hemisphere) receive more direct sunlight and typically melt faster.',
      'Notice satellite dish orientations in rural areas - these generally point toward the equator.',
      'Examine spider webs - in sheltered places, they are often built on the warmer, south-facing sides of trees or structures.',
    ],
    caution:
      'Natural indicators vary greatly by location, climate, and local conditions. They should be used as general guidance only and in combination with multiple indicators.',
  },
];

export default emergencyTips;
