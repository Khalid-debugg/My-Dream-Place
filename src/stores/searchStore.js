import { defineStore } from "pinia";
export const useSearchStore = defineStore("search", {
  state: () => ({
    searchResults: null,
    searchParams: {
      city: null,
      checkInDate: null,
      checkOutDate: null,
      guests: {
        adults: 1,
        children: 0,
      },
      rooms: 1,
    },
  }),
  actions: {
    async sendSearchRequest() {
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${
        this.searchParams.city?.dest_id
      }&search_type=${
        this.searchParams.city?.search_type
      }&arrival_date=${this.formatDate(
        this.searchParams.checkInDate
      )}&departure_date=${this.formatDate(
        this.searchParams.checkOutDate
      )}&adults=${this.searchParams.guests.adults}&children_age=${
        this.searchParams.guests.children
      }&room_qty=${
        this.searchParams.rooms
      }&page_number=1&languagecode=en-us&currency_code=AED`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5629cf60a9mshc5cae17e59e28c8p1ecd91jsn9feff1f5fa76",

          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1);
      const day = String(date.getDate());
      return `${year}-${month}-${day}`;
    },
  },
});
