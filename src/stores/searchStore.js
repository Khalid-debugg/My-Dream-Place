import { defineStore } from "pinia";
import config from "../../config";
import { ref } from "vue";
export const useSearchStore = defineStore("search", () => {
  const searchResults = ref([]);
  const city = ref(null);
  const checkInDate = ref(null);
  const checkOutDate = ref(null);
  const adults = ref(null);
  const children = ref(null);
  const rooms = ref(null);
  const totalHotelsNumber = ref(null);
  async function sendSearchRequest(pageNumber, minPrice, maxPrice, sortID) {
    const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${
      city.value.dest_id
    }&search_type=CITY&arrival_date=${formatDate(
      checkInDate.value
    )}&departure_date=${formatDate(checkOutDate.value)}&adults=${
      adults.value || 1
    }&children_age=${children.value || 0}%2C17&room_qty=${
      rooms.value || 1
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
      searchResults.value = result;
      totalHotelsNumber.value =
        parseInt(result.data.meta[0]?.title.split(" ")[0]) ||
        totalHotelsNumber.value;
    } catch (error) {
      console.error(error);
      alert("Please enter valid data");
    }
  }
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    return `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
  }
  return {
    searchResults,
    city,
    checkInDate,
    checkOutDate,
    rooms,
    adults,
    children,
    totalHotelsNumber,
    sendSearchRequest,
    formatDate,
  };
});
