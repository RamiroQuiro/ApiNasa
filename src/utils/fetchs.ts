export const API_KEY = "sJ67Kpmbsea0w4qdOC5vCnCOzmwsKPhRwQpT7vNP";

export const URI = "https://api.nasa.gov/planetary/apod";

export const fechitng = async (urlParams?: string) => {
  try {
    const fetching = await fetch(
      `${URI}?api_key=${API_KEY}${
        typeof urlParams !== "undefined" && urlParams?.length > 0
          ? urlParams
          : ""
      }`
    );
    const data = await fetching.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
