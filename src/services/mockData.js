/**
 * Mock Data Service
 * Provides placeholder data for features not available in hotels-api.com
 */

import { getRandomHotelImage } from './hotelImages';

/**
 * Generate mock hotel description
 */
export function getMockHotelDescription(hotelName) {
  return [
    {
      description: `${hotelName} offers a perfect blend of comfort and convenience. Our property features modern amenities and exceptional service to make your stay memorable.`,
    },
    {
      description: `Located in the heart of the city, ${hotelName} provides easy access to major attractions, shopping districts, and entertainment venues. Experience the perfect getaway with us.`,
    },
  ];
}

/**
 * Generate mock nearby landmarks
 */
export function getMockNearbyLandmarks(city = 'the city') {
  return [
    { tag: 'City Center', distance: 2.5 },
    { tag: 'Main Shopping District', distance: 1.8 },
    { tag: 'Popular Museum', distance: 3.2 },
    { tag: 'Historic Square', distance: 2.0 },
    { tag: 'Central Park', distance: 1.5 },
    { tag: 'Convention Center', distance: 4.0 },
    { tag: 'Main Railway Station', distance: 3.5 },
    { tag: 'Airport', distance: 15.0 },
  ];
}

/**
 * Generate mock hotel benefits/amenities
 */
export function getMockHotelBenefits() {
  const allBenefits = [
    { icon: 'wifi', translated_name: 'Free WiFi' },
    { icon: 'parking', translated_name: 'Free Parking' },
    { icon: 'pool', translated_name: 'Swimming Pool' },
    { icon: 'gym', translated_name: 'Fitness Center' },
    { icon: 'restaurant', translated_name: 'Restaurant' },
    { icon: 'bar', translated_name: 'Bar' },
    { icon: 'spa', translated_name: 'Spa' },
    { icon: 'room-service', translated_name: '24/7 Room Service' },
    { icon: 'concierge', translated_name: 'Concierge' },
    { icon: 'laundry', translated_name: 'Laundry Service' },
  ];

  // Return random 6-8 benefits
  const count = Math.floor(Math.random() * 3) + 6;
  return allBenefits.slice(0, count);
}

/**
 * Generate mock room data
 */
export function getMockRoomList(hotelName) {
  const roomTypes = [
    {
      description: 'Standard Double Room',
      photos: [
        { url_640x200: '/assets/images/room1.png' },
        { url_640x200: '/assets/images/room2.png' },
      ],
      highlights: [
        { translated_name: 'Free WiFi', icon: 'wifi' },
        { translated_name: 'Air Conditioning', icon: 'ac' },
        { translated_name: 'Flat-screen TV', icon: 'tv' },
        { translated_name: 'Private Bathroom', icon: 'bathroom' },
      ],
    },
    {
      description: 'Deluxe Suite',
      photos: [
        { url_640x200: '/assets/images/room2.png' },
        { url_640x200: '/assets/images/room3.png' },
      ],
      highlights: [
        { translated_name: 'Free WiFi', icon: 'wifi' },
        { translated_name: 'King Size Bed', icon: 'bed' },
        { translated_name: 'City View', icon: 'view' },
        { translated_name: 'Mini Bar', icon: 'minibar' },
        { translated_name: 'Separate Living Area', icon: 'sofa' },
      ],
    },
    {
      description: 'Executive Room',
      photos: [
        { url_640x200: '/assets/images/room3.png' },
        { url_640x200: '/assets/images/room1.png' },
      ],
      highlights: [
        { translated_name: 'Free WiFi', icon: 'wifi' },
        { translated_name: 'Work Desk', icon: 'desk' },
        { translated_name: 'Coffee Machine', icon: 'coffee' },
        { translated_name: 'Premium Bedding', icon: 'bed' },
      ],
    },
  ];

  return roomTypes;
}

/**
 * Generate mock review data
 */
export function getMockReviewData() {
  const scores = [7.5, 8.0, 8.5, 9.0, 9.2];
  const counts = [125, 250, 380, 450, 520];
  const randomIndex = Math.floor(Math.random() * scores.length);

  return {
    reviewScore: scores[randomIndex],
    reviewCount: counts[randomIndex],
  };
}

/**
 * Generate random hotel description based on hotel ID
 * @param {string|number} hotelId - The unique hotel identifier
 * @param {string} hotelName - The hotel name
 * @returns {string} - Descriptive text about the hotel
 */
export function getRandomHotelDescription(hotelId, hotelName) {
  const descriptions = [
    `Featuring free WiFi throughout the property, ${hotelName} offers comfortable accommodations with modern amenities. Guests can enjoy a continental breakfast each morning.`,
    `Located in the city center, ${hotelName} provides easy access to popular attractions. The property features air-conditioned rooms with flat-screen TVs and private bathrooms.`,
    `${hotelName} boasts an outdoor swimming pool and fitness center. Each room includes a seating area and work desk, perfect for both leisure and business travelers.`,
    `This elegant property offers spacious rooms with city views. ${hotelName} features a 24-hour front desk, concierge service, and on-site restaurant serving international cuisine.`,
    `Set in a prime location, ${hotelName} features contemporary rooms with premium bedding. Guests have access to a business center and meeting facilities.`,
    `${hotelName} offers a rooftop terrace with panoramic views. The property includes a spa, fitness center, and rooms equipped with coffee makers and minibars.`,
    `Nestled in a vibrant neighborhood, ${hotelName} provides comfortable rooms with free WiFi. The hotel features a lounge bar and 24-hour room service.`,
    `${hotelName} combines modern design with exceptional service. Rooms feature luxury amenities including rainfall showers, plush robes, and premium toiletries.`,
    `This boutique property offers personalized service and attention to detail. ${hotelName} features uniquely decorated rooms and a cozy breakfast area.`,
    `${hotelName} is perfect for travelers seeking comfort and convenience. The property offers spacious accommodations, free parking, and a daily housekeeping service.`,
    `Experience luxury at ${hotelName}, featuring elegant rooms with marble bathrooms. Guests can enjoy the indoor pool, sauna, and fine dining restaurant.`,
    `${hotelName} offers family-friendly accommodations with connecting rooms available. The property features a children's play area and complimentary breakfast buffet.`,
    `Located near shopping and dining options, ${hotelName} provides modern rooms with kitchenettes. Perfect for extended stays with laundry facilities on-site.`,
    `${hotelName} features soundproofed rooms ensuring a peaceful night's sleep. The property offers airport shuttle service and has a tour desk to help plan your stay.`,
    `This eco-friendly hotel prioritizes sustainability without compromising comfort. ${hotelName} features energy-efficient rooms and organic breakfast options.`,
  ];

  // Use hotel ID to get consistent description for each hotel
  if (!hotelId) {
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  }

  const hash = String(hotelId)
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return descriptions[hash % descriptions.length];
}

/**
 * Generate mock price breakdown
 */
export function getMockPriceBreakdown(basePrice = 120) {
  return {
    grossPrice: {
      value: basePrice,
      currency: 'USD',
    },
    taxExceptions: [],
    benefits: [],
  };
}

/**
 * Map hotels-api.com response to match existing app structure
 */
export function mapHotelToAppFormat(hotel) {
  const mockReview = getMockReviewData();
  const hotelId = hotel.id || hotel.hotel_id;
  const hotelName = hotel.name;

  // Use random image based on hotel ID if API doesn't return images
  const photoUrls = hotel.images && hotel.images.length > 0
    ? hotel.images
    : [getRandomHotelImage(hotelId)];

  return {
    property: {
      id: hotelId,
      name: hotelName,
      reviewScore: mockReview.reviewScore,
      reviewCount: mockReview.reviewCount,
      photoUrls: photoUrls,
      priceBreakdown: getMockPriceBreakdown(hotel.price || 120),
      latitude: hotel.latitude,
      longitude: hotel.longitude,
      checkinCheckoutTimes: {
        checkout: '12:00',
        checkin: '14:00',
      },
    },
    accessibilityLabel: getRandomHotelDescription(hotelId, hotelName),
  };
}

export default {
  getMockHotelDescription,
  getMockNearbyLandmarks,
  getMockHotelBenefits,
  getMockRoomList,
  getMockReviewData,
  getMockPriceBreakdown,
  getRandomHotelDescription,
  mapHotelToAppFormat,
};
