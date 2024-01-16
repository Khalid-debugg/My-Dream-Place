export default function dataPersistence(context) {
  const storeKey = context.store.$id;
  const initialState = sessionStorage.getItem(storeKey)
    ? storeKey == "search"
      ? {
          searchResults: JSON.parse(sessionStorage.getItem(storeKey))
            .searchResults,
          city: JSON.parse(sessionStorage.getItem(storeKey)).city,
          checkInDate: JSON.parse(sessionStorage.getItem(storeKey)).checkInDate
            ? new Date(JSON.parse(sessionStorage.getItem(storeKey)).checkInDate)
            : null,
          checkOutDate: JSON.parse(sessionStorage.getItem(storeKey))
            .checkOutDate
            ? new Date(
                JSON.parse(sessionStorage.getItem(storeKey)).checkOutDate
              )
            : null,
          adults: JSON.parse(sessionStorage.getItem(storeKey)).adults,
          children: JSON.parse(sessionStorage.getItem(storeKey)).children,
          rooms: JSON.parse(sessionStorage.getItem(storeKey)).rooms,
          totalHotelsNumber: parseInt(
            JSON.parse(sessionStorage.getItem(storeKey)).totalHotelsNumber
          ),
        }
      : {
          email: JSON.parse(sessionStorage.getItem(storeKey)).email,
          password: JSON.parse(sessionStorage.getItem(storeKey)).password,
          isAuthenticated: JSON.parse(sessionStorage.getItem(storeKey))
            .isAuthenticated,
          redirectedPath: JSON.parse(sessionStorage.getItem(storeKey))
            .redirectedPath,
        }
    : {};
  context.store.$state = initialState;
  context.store.$subscribe((mutation, state) => {
    const serializedValue = JSON.stringify(state);
    console.log(serializedValue);
    window.sessionStorage.setItem(storeKey, serializedValue);
  });
}
