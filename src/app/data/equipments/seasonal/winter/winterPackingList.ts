// data/seasonal/winter/packingList.ts

export interface PackingList {
  essential: string[];
  optional: string[];
  seasonName: string;
  downloadUrl: string;
}

const winterPackingList: PackingList = {
  essential: [
    'Insulated waterproof jacket',
    'Insulated waterproof pants or softshell pants',
    'Heavyweight base layer (top and bottom)',
    'Mid layer insulation piece',
    'Waterproof insulated gloves or mittens',
    'Glove liners',
    'Insulated waterproof boots',
    'Wool or synthetic socks (plus extras)',
    'Warm hat that covers ears',
    'Neck gaiter or balaclava',
    'Goggles for wind/snow protection',
    'Sunglasses (snow glare protection)',
    'Traction devices (microspikes, crampons, etc.)',
    'Insulated water bottle or thermos',
    'High-calorie snacks',
    'Headlamp with extra batteries',
    'First aid kit with hand warmers',
  ],
  optional: [
    'Snowshoes',
    'Trekking poles with snow baskets',
    'GPS device',
    'Avalanche beacon (for avalanche terrain)',
    'Emergency shelter',
    'Extra mid-layer',
    'Down pants for extreme cold',
    'Gaiters for deep snow',
    'Insulated seat pad',
    'Chemical heat packs',
    'Satellite messenger',
    'Camera with extra batteries',
    'Snow shovel (for deep snow or emergency shelter)',
    'Map and compass',
    'Sunscreen (yes, even in winter!)',
    'Lip balm with SPF',
    'Vacuum insulated food container',
  ],
  seasonName: 'Winter',
  downloadUrl: '/downloads/winter-packing-checklist.pdf',
};

export default winterPackingList;
