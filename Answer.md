# Answer.md

## How to Run the Script

1. Ensure you have Node.js installed on your machine.
2. Install the required packages by running:
   ```bash
   npm install axios jsdom
   ```
3. Save the script in the `scrape_search/` directory as `index.js`.
4. Run the script using:
   ```bash
   node scrape_search/index.js
   ```

## Dependencies

- `axios`: For making HTTP requests.
- `jsdom`: For parsing and manipulating HTML.

## Assumptions

- The script assumes that the Booking.com search results page structure remains consistent.
- Additional data fields can be included as needed by extending the script to extract more elements from the HTML.

## Usage of AI Tools

- AI tools were used to quickly draft the initial version of the script and to ensure that the approach to extracting and structuring the data is efficient and reliable.

# Answer.md (Frontend)

## Commentary on Existing Pages

- The New User Wizard has a straightforward design but lacks contextual help for users.
- The forms are functional but could benefit from improved validation feedback.

## Recommendations on Enhancements

1. **User Interface Improvements**:

   - Add tooltips to form fields.
   - Include a progress bar to indicate completion status.
   - Ensure the wizard is fully responsive.

2. **User Experience Enhancements**:

   - Provide immediate validation feedback.
   - Allow users to save and resume their progress.

3. **Technical Optimizations**:
   - Refactor code to be modular and reusable.
   - Optimize images and resources for better performance.

## Assumptions

- Assumed that the user base includes non-tech-savvy individuals.
- Focused on improving both UI and UX to enhance user engagement and satisfaction.

## Code Improvements

- Implemented a progress bar and tooltips for better guidance.
- Refactored the code to improve maintainability and performance.
