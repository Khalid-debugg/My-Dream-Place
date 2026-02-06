/**
 * Hotels API Service
 * Handles all API calls to hotels-api.com
 */

// Use proxy in development to avoid CORS issues
const API_BASE_URL = import.meta.env.DEV
  ? '/api/hotels'  // Use Vite proxy in development
  : 'https://hotels-api.com/api/hotels';  // Direct API in production

const API_KEY = import.meta.env.VITE_HOTELS_API_KEY;

/**
 * Search hotels by city and country
 * @param {Object} params - Search parameters
 * @param {string} params.city - City name
 * @param {string} params.country - Country name
 * @param {number} params.minRating - Minimum rating (optional)
 * @param {string} params.amenities - Comma-separated amenities (optional)
 * @param {number} params.limit - Number of results (default: 30)
 * @returns {Promise<Object>} - Hotel search results
 */
export async function searchHotels({ city, country, minRating, amenities, limit = 30 }) {
  const params = new URLSearchParams();

  if (city) params.append('city', city);
  if (country) params.append('country', country);
  if (minRating) params.append('min_rating', minRating);
  if (amenities) params.append('amenities', amenities);
  if (limit) params.append('limit', limit);

  const url = `${API_BASE_URL}/search?${params.toString()}`;

  console.log('Attempting to fetch from:', url);
  console.log('Using API Key:', API_KEY ? `${API_KEY.substring(0, 10)}...` : 'NOT SET');

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error searching hotels:', error);
    console.warn('Falling back to mock data due to API error');

    // Return mock data structure that matches expected format
    return {
      hotels: generateMockHotels(city, country, limit),
      total: limit,
      error: error.message,
    };
  }
}

/**
 * Generate mock hotels for fallback
 */
function generateMockHotels(city, country, limit = 30) {
  const mockHotels = [];
  const hotelNames = [
    'Grand Plaza Hotel',
    'Royal Suites',
    'City Center Inn',
    'Luxury Palace',
    'Boutique Hotel',
    'Modern Residence',
    'Heritage Hotel',
    'Skyline Tower',
    'Ocean View Resort',
    'Garden Retreat',
  ];

  for (let i = 0; i < Math.min(limit, 30); i++) {
    const baseName = hotelNames[i % hotelNames.length];
    mockHotels.push({
      id: `hotel_${i + 1}`,
      hotel_id: `hotel_${i + 1}`,
      name: `${baseName} ${city}`,
      rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 to 5.0
      price: Math.floor(Math.random() * 300 + 80), // $80 to $380
      latitude: 48.8566 + (Math.random() - 0.5) * 0.1,
      longitude: 2.3522 + (Math.random() - 0.5) * 0.1,
      images: [
        '/assets/images/room1.png',
        '/assets/images/room2.png',
        '/assets/images/room3.png',
      ],
      address: `${Math.floor(Math.random() * 999) + 1} Main Street`,
      city: city,
      country: country,
    });
  }

  return mockHotels;
}

/**
 * Search hotels nearby a GPS location
 * @param {Object} params - Search parameters
 * @param {number} params.lat - Latitude
 * @param {number} params.lng - Longitude
 * @param {number} params.radius - Radius in meters (default: 5000)
 * @param {number} params.limit - Number of results (default: 30)
 * @returns {Promise<Object>} - Hotel search results
 */
export async function searchNearbyHotels({ lat, lng, radius = 5000, limit = 30 }) {
  const params = new URLSearchParams();

  params.append('lat', lat);
  params.append('lng', lng);
  params.append('radius', radius);
  params.append('limit', limit);

  const url = `${API_BASE_URL}/nearby?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching nearby hotels:', error);
    throw error;
  }
}

/**
 * Get hotel details by ID
 * Note: This might require the actual hotel ID from the search results
 * @param {string} hotelId - Hotel ID
 * @returns {Promise<Object>} - Hotel details
 */
export async function getHotelDetails(hotelId) {
  // Since the API documentation doesn't specify a details endpoint,
  // we'll search by ID or return cached data
  // This will be implemented based on actual API response structure
  console.warn('getHotelDetails: Implementation pending based on API structure');
  return null;
}

export default {
  searchHotels,
  searchNearbyHotels,
  getHotelDetails,
};
