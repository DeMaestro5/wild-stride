// app/data/equipments/seasonal/summer/adaptedSummerFeaturedGear.ts
import { FeaturedGearItem as GridFeaturedGearItem } from '../../../../../components/equipment/FeatureGearGrid';
import summerFeaturedGear from './summerFeaturedGear';

// Convert from your summerTypes.FeaturedGearItem to FeatureGearGrid.FeaturedGearItem
const adaptedSummerFeaturedGear: GridFeaturedGearItem[] =
  summerFeaturedGear.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    description: item.features.join(' • '), // Convert features array to description string
    image: item.imageUrl, // Map imageUrl to image
    url: `/equipment/product/${item.id}`, // Create a URL based on the product ID
    featured: item.tags.some((tag) => tag.text === 'Featured'), // Set featured based on tags
    seasonalTag: 'Summer', // Add the seasonal tag
  }));

export default adaptedSummerFeaturedGear;
