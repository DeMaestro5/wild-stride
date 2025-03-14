import { PackingList } from '../../../../../types/summerTypes';

const summerPackingList: PackingList = {
  essential: [
    {
      name: 'Moisture-wicking t-shirts/tank tops',
      description:
        'Synthetic or wool blend shirts that draw sweat away from your body',
      importance: 'critical',
      category: 'clothing',
      icon: 'shirt',
    },
    {
      name: 'Lightweight hiking pants/shorts',
      description:
        'Quick-drying, breathable pants; convertible pants are versatile for changing conditions',
      importance: 'critical',
      category: 'clothing',
      icon: 'pants',
    },
    {
      name: 'Sun hat with wide brim',
      description: 'Protects face, neck and ears from intense sun exposure',
      importance: 'critical',
      category: 'clothing',
      icon: 'hat',
    },
    {
      name: 'Hydration system (3L minimum)',
      description: 'Reservoir or bottles with capacity for hot conditions',
      importance: 'critical',
      category: 'gear',
      icon: 'water',
    },
    {
      name: 'Sunscreen (SPF 30+)',
      description: 'Broad-spectrum, water-resistant formula',
      importance: 'critical',
      category: 'safety',
      icon: 'sun',
    },
    {
      name: 'Sunglasses with UV protection',
      description: 'Shields eyes from harmful rays and reduces eye strain',
      importance: 'critical',
      category: 'gear',
      icon: 'glasses',
    },
    {
      name: 'Lightweight trail runners/hiking shoes',
      description: 'Breathable footwear with good traction',
      importance: 'critical',
      category: 'footwear',
      icon: 'shoe',
    },
    {
      name: 'Insect repellent',
      description: 'DEET or picaridin-based for mosquitoes and ticks',
      importance: 'high',
      category: 'safety',
      icon: 'bug',
    },
    {
      name: 'Lightweight rain jacket',
      description: 'Protection from sudden afternoon storms',
      importance: 'high',
      category: 'clothing',
      icon: 'jacket',
    },
    {
      name: 'First aid kit',
      description:
        'Include treatments for blisters, cuts, allergic reactions, and heat-related issues',
      importance: 'critical',
      category: 'safety',
      icon: 'firstaid',
    },
    {
      name: 'Electrolyte supplements',
      description: 'Replace minerals lost through heavy sweating',
      importance: 'high',
      category: 'nutrition',
      icon: 'nutrition',
    },
    {
      name: 'Moisture-wicking underwear',
      description: 'Prevents chafing and keeps you comfortable',
      importance: 'high',
      category: 'clothing',
      icon: 'clothing',
    },
    {
      name: 'Lightweight backpack (20-30L)',
      description: 'With good ventilation against your back',
      importance: 'critical',
      category: 'gear',
      icon: 'backpack',
    },
  ],
  optional: [
    {
      name: 'UV protecting arm sleeves',
      description: 'Alternative to sunscreen that can be removed when cooler',
      importance: 'medium',
      category: 'clothing',
      icon: 'clothing',
    },
    {
      name: 'Cooling towel/bandana',
      description: 'When wet, provides evaporative cooling effect',
      importance: 'medium',
      category: 'gear',
      icon: 'towel',
    },
    {
      name: 'Permethrin-treated clothing',
      description: 'For areas with high tick or mosquito presence',
      importance: 'variable',
      category: 'clothing',
      icon: 'shield',
    },
    {
      name: 'Portable water filter',
      description: 'For refilling from natural sources on longer hikes',
      importance: 'variable',
      category: 'gear',
      icon: 'filter',
    },
    {
      name: 'Head net',
      description: 'For areas with high mosquito or fly activity',
      importance: 'variable',
      category: 'gear',
      icon: 'net',
    },
    {
      name: 'Lightweight camp shoes',
      description: 'For water crossings or relaxing after hiking',
      importance: 'medium',
      category: 'footwear',
      icon: 'sandal',
    },
    {
      name: 'Trekking poles',
      description: 'Reduces impact on joints during descents',
      importance: 'medium',
      category: 'gear',
      icon: 'poles',
    },
    {
      name: 'Lip balm with SPF',
      description: 'Protects lips from sun damage and drying',
      importance: 'medium',
      category: 'safety',
      icon: 'medical',
    },
    {
      name: 'Portable shade (umbrella/tarp)',
      description: 'Creates relief from direct sun in exposed terrain',
      importance: 'variable',
      category: 'gear',
      icon: 'umbrella',
    },
  ],
  downloadUrl: '#',
};

export default summerPackingList;
