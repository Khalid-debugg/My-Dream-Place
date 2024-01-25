import { defineStore } from "pinia";
import config from "../../config";
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
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${
        this.city.dest_id
      }&search_type=CITY&arrival_date=${this.formatDate(
        this.checkInDate
      )}&departure_date=${this.formatDate(this.checkOutDate)}&adults=${
        this.adults || 1
      }&children_age=${this.children || 0}%2C17&room_qty=${
        this.rooms || 1
      }&page_number=${pageNumber || 1}&price_min=${minPrice || ""}&price_max=${
        maxPrice || ""
      }&sort_by=${sortID || ""}&languagecode=en-us&currency_code=USD`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": config.apiKey,
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
      console.log(url);
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        this.searchResults = result;
        this.totalHotelsNumber =
          parseInt(result.data.meta[0]?.title.split(" ")[0]) ||
          this.totalHotelsNumber;
        this.priceBreakdownList = result.data.hotels.map(
          (hotel) => hotel.property.priceBreakdown
        );
        console.log(this.priceBreakdownList);
      } catch (error) {
        console.error(error);
        alert("Please enter valid data");
      }
    },
    formatDate(date) {
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
        ctx.store.checkInDate = new Date(
          JSON.parse(window.sessionStorage.getItem("search")).checkInDate
        );
        ctx.store.checkOutDate = new Date(
          JSON.parse(window.sessionStorage.getItem("search")).checkOutDate
        );
      }
    },
    storage: sessionStorage,
  },
});
