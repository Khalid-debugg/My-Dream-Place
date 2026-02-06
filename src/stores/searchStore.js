import { defineStore } from "pinia";
import { searchHotels } from "../services/hotelApi";
import { mapHotelToAppFormat } from "../services/mockData";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      searchResults: [],
      city: null,
      checkInDate: null,
      checkOutDate: null,
      adults: null,
      children: null,
      rooms: null,
      totalHotelsNumber: null,
      priceBreakdownList: [],
    };
  },
  actions: {
    async sendSearchRequest(pageNumber, minPrice, maxPrice, sortID) {
      if (!this.city) {
        throw new Error("Please select a city");
      }

      try {
        // Call the new hotels-api.com endpoint
        const result = await searchHotels({
          city: this.city.name,
          country: this.city.country,
          limit: 30, // Free tier limit
        });

        // Map the API response to match the existing app structure
        const mappedHotels = result.hotels?.map(mapHotelToAppFormat) || [];

        // Filter by price if specified
        let filteredHotels = mappedHotels;
        if (minPrice || maxPrice) {
          filteredHotels = mappedHotels.filter((hotel) => {
            const price = hotel.property.priceBreakdown?.grossPrice?.value || 0;
            if (minPrice && price < minPrice) return false;
            if (maxPrice && price > maxPrice) return false;
            return true;
          });
        }

        // Update state to match old structure
        this.searchResults = {
          data: {
            hotels: filteredHotels,
            meta: [
              {
                title: `${filteredHotels.length} hotels found`,
              },
            ],
          },
        };

        this.totalHotelsNumber = filteredHotels.length;
        this.priceBreakdownList = filteredHotels.map(
          (hotel) => hotel.property.priceBreakdown
        );
      } catch (error) {
        console.error("Error searching hotels:", error);
        alert(
          "Unable to search hotels. Please check your internet connection and try again."
        );
      }
    },
    formatDate(date) {
      if (!date) return "";
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1);
      const day = String(date.getDate());
      return `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
    },
  },
  persist: {
    afterRestore: (ctx) => {
      if (window.sessionStorage.getItem("search")) {
        const stored = JSON.parse(window.sessionStorage.getItem("search"));
        if (stored.checkInDate) {
          ctx.store.checkInDate = new Date(stored.checkInDate);
        }
        if (stored.checkOutDate) {
          ctx.store.checkOutDate = new Date(stored.checkOutDate);
        }
      }
    },
    storage: sessionStorage,
  },
});
