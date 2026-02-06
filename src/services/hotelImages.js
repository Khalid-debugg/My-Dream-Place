// Collection of high-quality hotel images from Unsplash
const hotelImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', // Luxury hotel exterior
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80', // Modern hotel interior
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', // Beach resort
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80', // Hotel room
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', // Hotel lobby
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80', // Boutique hotel
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80', // Hotel pool
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&q=80', // City hotel
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', // Resort
  'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&q=80', // Hotel exterior night
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', // Tropical resort
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80', // Mountain hotel
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80', // Modern hotel building
  'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80', // Hotel reception
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', // Coastal hotel
];

/**
 * Generate a deterministic random image based on hotel ID
 * This ensures the same hotel always gets the same image
 * @param {string|number} hotelId - The unique hotel identifier
 * @returns {string} - URL of the hotel image
 */
export function getRandomHotelImage(hotelId) {
  // If no hotelId provided, return truly random image
  if (!hotelId) {
    return hotelImages[Math.floor(Math.random() * hotelImages.length)];
  }

  // Create a simple hash from the hotelId to get consistent random image
  const hash = String(hotelId)
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return hotelImages[hash % hotelImages.length];
}

/**
 * Get all available hotel images
 * @returns {Array<string>} - Array of all hotel image URLs
 */
export function getAllHotelImages() {
  return [...hotelImages];
}
