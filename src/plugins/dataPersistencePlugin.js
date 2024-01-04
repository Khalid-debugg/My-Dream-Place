export default function dataPersistence(context) {
  const storeKey = context.store.$id;
  const initialState = sessionStorage.getItem(storeKey)
    ? {
        searchResults: JSON.parse(sessionStorage.getItem(storeKey))
          .searchResults,
        city: JSON.parse(sessionStorage.getItem(storeKey)).city,
        checkInDate: JSON.parse(sessionStorage.getItem(storeKey)).checkInDate
          ? new Date(JSON.parse(sessionStorage.getItem(storeKey)).checkInDate)
          : null,
        checkOutDate: JSON.parse(sessionStorage.getItem(storeKey)).checkOutDate
          ? new Date(JSON.parse(sessionStorage.getItem(storeKey)).checkOutDate)
          : null,
        adults: JSON.parse(sessionStorage.getItem(storeKey)).adults,
        children: JSON.parse(sessionStorage.getItem(storeKey)).children,
        rooms: JSON.parse(sessionStorage.getItem(storeKey)).rooms,
      }
    : {};
  context.store.$state = initialState;
  context.store.$subscribe((mutation, state) => {
    const serializedValue = JSON.stringify(state);

    window.sessionStorage.setItem(storeKey, serializedValue);
    window.localStorage.setItem(storeKey, serializedValue);
  });
}
