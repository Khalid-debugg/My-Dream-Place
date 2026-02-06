/**
 * Hardcoded list of popular cities for hotel search
 * Organized by region for better UX
 */

export const popularCities = [
  // Europe
  { name: 'Paris', country: 'France', search_type: 'city', region: 'Europe' },
  { name: 'London', country: 'United Kingdom', search_type: 'city', region: 'Europe' },
  { name: 'Rome', country: 'Italy', search_type: 'city', region: 'Europe' },
  { name: 'Barcelona', country: 'Spain', search_type: 'city', region: 'Europe' },
  { name: 'Amsterdam', country: 'Netherlands', search_type: 'city', region: 'Europe' },
  { name: 'Berlin', country: 'Germany', search_type: 'city', region: 'Europe' },
  { name: 'Prague', country: 'Czech Republic', search_type: 'city', region: 'Europe' },
  { name: 'Vienna', country: 'Austria', search_type: 'city', region: 'Europe' },
  { name: 'Athens', country: 'Greece', search_type: 'city', region: 'Europe' },
  { name: 'Lisbon', country: 'Portugal', search_type: 'city', region: 'Europe' },

  // North America
  { name: 'New York', country: 'United States', search_type: 'city', region: 'North America' },
  { name: 'Los Angeles', country: 'United States', search_type: 'city', region: 'North America' },
  { name: 'Las Vegas', country: 'United States', search_type: 'city', region: 'North America' },
  { name: 'Miami', country: 'United States', search_type: 'city', region: 'North America' },
  { name: 'San Francisco', country: 'United States', search_type: 'city', region: 'North America' },
  { name: 'Toronto', country: 'Canada', search_type: 'city', region: 'North America' },
  { name: 'Vancouver', country: 'Canada', search_type: 'city', region: 'North America' },
  { name: 'Mexico City', country: 'Mexico', search_type: 'city', region: 'North America' },

  // Asia
  { name: 'Tokyo', country: 'Japan', search_type: 'city', region: 'Asia' },
  { name: 'Bangkok', country: 'Thailand', search_type: 'city', region: 'Asia' },
  { name: 'Singapore', country: 'Singapore', search_type: 'city', region: 'Asia' },
  { name: 'Dubai', country: 'United Arab Emirates', search_type: 'city', region: 'Asia' },
  { name: 'Hong Kong', country: 'China', search_type: 'city', region: 'Asia' },
  { name: 'Seoul', country: 'South Korea', search_type: 'city', region: 'Asia' },
  { name: 'Mumbai', country: 'India', search_type: 'city', region: 'Asia' },
  { name: 'Delhi', country: 'India', search_type: 'city', region: 'Asia' },
  { name: 'Bali', country: 'Indonesia', search_type: 'city', region: 'Asia' },
  { name: 'Istanbul', country: 'Turkey', search_type: 'city', region: 'Asia' },

  // Oceania
  { name: 'Sydney', country: 'Australia', search_type: 'city', region: 'Oceania' },
  { name: 'Melbourne', country: 'Australia', search_type: 'city', region: 'Oceania' },
  { name: 'Auckland', country: 'New Zealand', search_type: 'city', region: 'Oceania' },

  // South America
  { name: 'Rio de Janeiro', country: 'Brazil', search_type: 'city', region: 'South America' },
  { name: 'Buenos Aires', country: 'Argentina', search_type: 'city', region: 'South America' },
  { name: 'Lima', country: 'Peru', search_type: 'city', region: 'South America' },

  // Africa
  { name: 'Cairo', country: 'Egypt', search_type: 'city', region: 'Africa' },
  { name: 'Cape Town', country: 'South Africa', search_type: 'city', region: 'Africa' },
  { name: 'Marrakech', country: 'Morocco', search_type: 'city', region: 'Africa' },
];

/**
 * Get cities grouped by region
 */
export function getCitiesByRegion() {
  const regions = {};
  popularCities.forEach((city) => {
    if (!regions[city.region]) {
      regions[city.region] = [];
    }
    regions[city.region].push(city);
  });
  return regions;
}

/**
 * Search cities by name
 */
export function searchCities(query) {
  if (!query) return popularCities;

  const lowerQuery = query.toLowerCase();
  return popularCities.filter(
    (city) =>
      city.name.toLowerCase().includes(lowerQuery) ||
      city.country.toLowerCase().includes(lowerQuery)
  );
}

export default {
  popularCities,
  getCitiesByRegion,
  searchCities,
};
