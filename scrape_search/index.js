import axios from "axios";
import {JSDOM} from "jsdom";

(async () => {
  const searchTerm = encodeURIComponent("Budget Inn Anaheim near Disneyland");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkinDate = today.toISOString().split("T")[0];
  const checkoutDate = tomorrow.toISOString().split("T")[0];
  const url = `https://www.booking.com/searchresults.en-gb.html?ss=${searchTerm}&checkin=${checkinDate}&checkout=${checkoutDate}&group_adults=2&no_rooms=1&group_children=0&age=0`;

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const {window} = new JSDOM(response.data);
    const document = window.document;

    const hotels = [];
    const propertyCards = document.querySelectorAll(
      "[data-testid='property-card']",
    );

    propertyCards.forEach((card) => {
      const title =
        card.querySelector("[data-testid='title']")?.textContent?.trim() || "";
      const address =
        card.querySelector("[data-testid='address']")?.textContent?.trim() ||
        "";
      const price =
        card
          .querySelector("[data-testid='price-and-discounted-price']")
          ?.textContent?.trim() || "";
      const score =
        card
          .querySelector("[data-testid='review-score']")
          ?.textContent?.trim()
          ?.split(" ")[0] || "";

      const hotelData = {
        title,
        address,
        price,
        score,
        searchTerm,
        countryCode: window.utag_data?.user_location || "us",
        userCurrency: window.utag_data?.currency || "USD",
      };

      hotels.push(hotelData);
    });

    console.log(JSON.stringify(hotels, null, 2));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
