// app/data/mapping-guide/navigationTechniques.ts

const navigationTechniques = [
  {
    name: 'Map and Compass Navigation',
    description:
      'The foundational navigation technique using a paper map and compass to determine your location and travel direction.',
    icon: 'compass',
    steps: [
      {
        title: 'Orient Your Map',
        description:
          'Place your compass on the map, align the edge with north, and rotate the map until the compass needle aligns with the north lines on the map.',
      },
      {
        title: 'Identify Landmarks',
        description:
          'Find distinct features visible both on your map and in the surrounding landscape to confirm your location.',
      },
      {
        title: 'Take a Bearing',
        description:
          'Point the direction of travel arrow toward your destination, rotate the bezel until the orienting lines align with north on the map.',
      },
      {
        title: 'Follow Your Bearing',
        description:
          'Hold the compass level with the direction of travel arrow pointing forward, and rotate your body until the needle aligns with the orienting arrow.',
      },
    ],
    difficulty: 'Intermediate',
  },
  {
    name: 'Triangulation',
    description:
      'A technique to determine your exact position by taking bearings to multiple known landmarks and plotting their intersection on a map.',
    icon: 'compass',
    steps: [
      {
        title: 'Identify Visible Landmarks',
        description:
          'Find at least three distinct features that you can see clearly and can also identify on your map.',
      },
      {
        title: 'Take Bearings to Landmarks',
        description:
          'Use your compass to measure the exact bearing from your position to each landmark, noting each degree reading.',
      },
      {
        title: 'Convert to Back Bearings',
        description:
          'Add or subtract 180° from each bearing to find the back bearing (the direction from the landmark to you).',
      },
      {
        title: 'Plot on Map',
        description:
          'Place compass on map at each landmark, align at the back bearing angle, and draw a line. Your position is where lines intersect.',
      },
    ],
    difficulty: 'Advanced',
  },
  {
    name: 'Terrain Association',
    description:
      'The practice of continuously matching terrain features around you with their representations on a map to maintain awareness of your location.',
    icon: 'terrain',
    steps: [
      {
        title: 'Study the Map Before Moving',
        description:
          'Identify key features you expect to encounter along your route - ridgelines, streams, trail junctions, etc.',
      },
      {
        title: 'Look for Corresponding Features',
        description:
          'As you travel, actively notice terrain features and match them to your map - check elevation changes match contour lines.',
      },
      {
        title: 'Use Catching Features',
        description:
          "Identify unmistakable features beyond your destination that will 'catch' you if you go too far.",
      },
      {
        title: 'Track Progress Continuously',
        description:
          "Regularly check your map against the terrain to confirm you're on route, especially after changing direction.",
      },
    ],
    difficulty: 'Intermediate',
  },
  {
    name: 'Dead Reckoning',
    description:
      'Navigation by keeping careful track of direction, distance, time, and speed from a known starting point when visibility is limited.',
    icon: 'compass',
    steps: [
      {
        title: 'Start from a Known Point',
        description:
          'Begin at a location you can precisely identify on your map, like a trail junction or distinctive landmark.',
      },
      {
        title: 'Determine Exact Bearing',
        description:
          'Take a precise compass bearing to your destination and note any intermediate bearings for planned direction changes.',
      },
      {
        title: 'Measure Distance and Time',
        description:
          'Calculate distance to your destination and convert to an estimated time based on your pace over the terrain.',
      },
      {
        title: 'Track Progress Methodically',
        description:
          'Count paces or track time carefully, adjusting course as needed, and actively look for confirming features.',
      },
    ],
    difficulty: 'Advanced',
  },
  {
    name: 'Celestial Navigation',
    description:
      'Using the sun, moon, stars, and natural indicators to determine direction when other navigation tools are unavailable.',
    icon: 'stars',
    steps: [
      {
        title: 'Find North Using the Sun',
        description:
          'In the northern hemisphere, the sun rises in the east, is due south at midday, and sets in the west.',
      },
      {
        title: 'Use an Analog Watch',
        description:
          'Point the hour hand at the sun - halfway between the hour hand and 12 points south in the northern hemisphere.',
      },
      {
        title: 'Navigate by North Star',
        description:
          'Locate Polaris (North Star) using the Big Dipper or Cassiopeia constellations - it indicates true north.',
      },
      {
        title: 'Observe Natural Indicators',
        description:
          'Note moss growth (often on north side of trees in northern hemisphere) and denser vegetation on north-facing slopes.',
      },
    ],
    difficulty: 'Intermediate',
  },
  {
    name: 'GPS Navigation',
    description:
      'Using electronic Global Positioning System devices to determine your exact coordinates and follow routes with digital maps.',
    icon: 'gps',
    steps: [
      {
        title: 'Prepare Your Device',
        description:
          'Download appropriate maps, create or import routes/waypoints, and check battery levels before departing.',
      },
      {
        title: 'Verify Position Accuracy',
        description:
          'Ensure device shows good satellite reception and wait for accurate positioning before making navigation decisions.',
      },
      {
        title: 'Set Up Route Navigation',
        description:
          'Activate route guidance if following a predetermined path, or mark waypoints for key locations along your journey.',
      },
      {
        title: 'Cross-Reference with Map',
        description:
          'Regularly compare GPS information with physical map features to maintain awareness if technology should fail.',
      },
    ],
    difficulty: 'Beginner',
  },
];

export default navigationTechniques;
