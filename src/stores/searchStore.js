import { defineStore } from "pinia";
export const useSearchStore = defineStore("search", {
  state: () => ({
    searchResults: [],
    city: null,
    checkInDate: null,
    checkOutDate: null,
    adults: null,
    children: null,
    rooms: null,
  }),
  actions: {
    async sendSearchRequest(minPrice, maxPrice, sortID, pageNumber) {
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
          "X-RapidAPI-Key":
            "7b2f1c3d7bmshc252119acedd28dp1c6c92jsn8111cc04fee9",

          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        console.log(url);
        const response = await fetch(url, options);
        const result = await response.json();
        this.searchResults = result;
        console.log(this.searchResults);
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
});
