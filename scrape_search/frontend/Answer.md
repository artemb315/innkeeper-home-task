## Analysis of current UI

After thorough examination of the provided demo app and the data model, I came up with some ideas and suggestions.

## Suggested improvements

### UI

- Some information is requested multiple times in the different wizards, like hotel address, email address. It should be asked once.
- In the wizard pages, the left side elements do not look clickable enough
- The analytics section has a lot of data, it might be overwhelming, maybe consider splitting it into sub-sections and prioritizing the most relevant pieces of data (clearer information hierarchy)
- The analytics section has some weird sphere illustrations. I think it looks cool but adds no real value, might even be confusing
- In the analytics page, it would be nice to show detailed data when hovering in the revenue chart. Same for other charts.
- Not sure how eCommerce fits into this, and the examples of popular products do not help me understand.
- I loved the light and dark themes, would be nice to add `system`
- The innkeeper logo gets cropped when I collapse the left side menu
- The requests are sending both a bearer token and a cookie, which is redundant
- The wizard endpoints are sending a userId query param which is redundant, since the user is authenticated, the api should be able to infer the userId
- The performance is pretty good, the design looks consistend and modular

### Data model

- There are some inconsistencies when naming the fields, would be ideal to stick to one convention, either camelCase or snake_case but not both.
- The User model id should be named id for consistency
- The User model contains the hotel data. This is not optimal, this data should be split into a new model, since eventually one user could own multiple hotels, or a hotel could have multiple users to manage it, with different permissions
- The Rates model contains price as a number, but there's no currency, It might be assuming USD as currency and this could bring issues in the future
- Some models have an `added` field which might not be very readable. Should be something like `created_at` instead
- Would be nice to add some indexes to increase performance
- Would be nice to use enums for fields with a predefined set of possible values, like `role`

## Product ideas

1- Auto-detect competitors. Propose options based on location, pricing range, stars rating of the client's hotel
2- Auto-fill hotel data in new user wizard. When the user fills in the booking url of the hotel, use it to detect name, description, amenities, and so on.
3- Let the user create a custom dashboard with the widgets they think are more relevant
4- Compile data for pricing trends for different seasons
5- Use AI to analyze demand patterns and demand forecasts

