// app/data/mapping-guide/mapNotations.ts

const mapNotations = [
  {
    category: 'Contour Lines',
    symbols: [
      {
        name: 'Index Contour',
        symbol: '───────',
        description:
          'Heavier brown line representing major elevation intervals (usually every fifth line), typically labeled with elevation.',
      },
      {
        name: 'Intermediate Contour',
        symbol: '───────',
        description:
          'Standard brown line representing regular elevation intervals between index contours.',
      },
      {
        name: 'Supplementary Contour',
        symbol: '- - - -',
        description:
          'Dashed brown line used to show important terrain features between standard contour intervals.',
      },
      {
        name: 'Depression Contour',
        symbol: '───┴───',
        description:
          'Contour line with small perpendicular hachure marks pointing inward to indicate a depression or hole.',
      },
      {
        name: 'Contour Interval',
        symbol: '40 ft',
        description:
          'Text in map legend indicating vertical distance between contour lines (commonly 20, 40, or 80 feet, or 10, 20, or 40 meters).',
      },
    ],
  },
  {
    category: 'Water Features',
    symbols: [
      {
        name: 'Perennial Stream/River',
        symbol: '━━━━━━',
        description:
          'Solid blue line indicating a stream or river that flows year-round.',
      },
      {
        name: 'Intermittent Stream',
        symbol: '┅ ┅ ┅ ┅',
        description:
          'Dashed blue line showing a stream that flows only seasonally or after rainfall.',
      },
      {
        name: 'Lake/Pond',
        symbol: '█████',
        description: 'Solid blue area representing a body of standing water.',
      },
      {
        name: 'Marsh/Swamp',
        symbol: '≈≈≈≈≈',
        description:
          'Blue or black pattern with horizontal lines and vegetation symbols indicating wetland areas.',
      },
      {
        name: 'Spring',
        symbol: '○',
        description:
          'Small blue circle, sometimes with a short line, marking a natural water source emerging from the ground.',
      },
    ],
  },
  {
    category: 'Vegetation & Land Cover',
    symbols: [
      {
        name: 'Forest/Woodland',
        symbol: '🌲🌲🌲',
        description:
          'Green shaded area, sometimes with small tree symbols, representing forested land.',
      },
      {
        name: 'Scrub/Brush',
        symbol: '⦿⦿⦿⦿',
        description:
          'Pattern of small green dots or symbols indicating areas of shrubs or low vegetation.',
      },
      {
        name: 'Grassland/Open',
        symbol: '░░░░░',
        description:
          'White or light green area indicating open terrain with little to no tree cover.',
      },
      {
        name: 'Orchard',
        symbol: '⊚⊚⊚⊚',
        description:
          'Regular grid pattern of small circles representing planted trees.',
      },
      {
        name: 'Barren/Rock',
        symbol: '⋰⋰⋰⋰',
        description:
          'Pattern of dots or small shapes in gray or brown indicating areas with little vegetation.',
      },
    ],
  },
  {
    category: 'Human Features',
    symbols: [
      {
        name: 'Trail/Path',
        symbol: '┈┈┈┈┈',
        description:
          'Thin black dashed line indicating a hiking trail or foot path.',
      },
      {
        name: 'Unimproved Road',
        symbol: '═ ═ ═',
        description:
          'Single dashed black line representing dirt or primitive roads.',
      },
      {
        name: 'Improved Road',
        symbol: '═════',
        description:
          'Solid black or red line representing paved or maintained roads.',
      },
      {
        name: 'Building',
        symbol: '■',
        description:
          'Small black square or rectangle representing a structure.',
      },
      {
        name: 'Campground',
        symbol: '⛺',
        description: 'Tent symbol indicating designated camping area.',
      },
    ],
  },
  {
    category: 'Navigation Elements',
    symbols: [
      {
        name: 'Benchmark/Survey Point',
        symbol: '▲',
        description:
          'Small triangle with elevation value indicating a surveyed location of known elevation.',
      },
      {
        name: 'Magnetic Declination',
        symbol: '↗↗↗',
        description:
          'Diagram showing the angular difference between true north and magnetic north for the map area.',
      },
      {
        name: 'UTM Grid Lines',
        symbol: '┃┃┃┃',
        description:
          'Blue or black grid lines with coordinate numbers for Universal Transverse Mercator positioning.',
      },
      {
        name: 'Scale Bar',
        symbol: '┠───┨',
        description:
          'Graphic showing distances on the map and corresponding real-world distances.',
      },
      {
        name: 'North Arrow',
        symbol: '↑',
        description:
          'Arrow or symbol indicating map orientation and direction of true north.',
      },
    ],
  },
];

export default mapNotations;
