# Exercise: Coffee Explorer

## Learning Goals

Upon completing this exercise, you will be able to:

- Set up and implement React Router from Scratch
- Create a main-detail view pattern using routes
- Implement URL-based filtering and search functionality

## Introduction

Ever browsed an local online coffee shop and thought, “This could be better organized”?

Today, you’re stepping into the shoes of a React developer to create a coffee bean browsing experience! We’ve provided you with a collection of premium coffee data, and your mission is to build an intuitive interface where users can explore, search, and filter different coffee beans. 

We’ve already set up the data file with coffee information - your task is to create a well-structured application using React Router.

Ready to brew up something special?

## Getting Started

1. Fork this Repository
2. Clone the Repository to your computer
3. Open the Repository in VS Code
4. Install dependencies with `npm install`
5. Install React Router with `npm install react-router`
6. Start the development server with `npm run dev`

Before jumping into coding, analyze the requirements and plan your component structure. 

We would like you to come up with something like this in the end:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<CoffeeLayout />}>
      <Route index element={<CoffeeList />} />
      <Route path=":id" element={<CoffeeDetails />} />
    </Route>
  </Routes>
</BrowserRouter>
```

> [!NOTE]
> Focus on functionality first. Styling can come later once the core features are working.

Before you begin with the tasks, create a new `routes` folder in your project. This is where your route components will live.

### Task 1: Create Base Components

Create the following base components that will form your application:

- `CoffeeList` - Displays the list of coffees
- `CoffeeListItem` - Displays the image, name, and price of each coffee
- `CoffeeDetails` - Shows individual coffee information
- `SearchBar` - Handles coffee search
- `Filters` - Manages filtering options

Each component should be focused on a single responsibility and use React Router hooks for navigation and URL management.

### Task 2: Set Up Routing

To implement the basic routing structure for your application, you'll need to start by setting up `BrowserRoute` as your routing foundation. 

Then, create the necessary routes to handle both list and detail views of your coffee products. You'll want to implement nested routing to achieve a main-detail pattern, which allows for a more organized user interface. Finally, make sure to properly handle URL parameters that will be used for selecting and displaying specific coffee items.

### Task 3: Implement the Main-Detail Layout

Create a responsive main-detail view layout for your coffee explorer.

The interface should display a list of coffee options on the left side of the screen, with detailed information appearing on the right when a specific coffee is selected. The layout needs to be mobile-friendly, automatically adjusting its presentation for smaller screens. Additionally, the URL should dynamically update to reflect the currently selected coffee, enabling direct linking and browser navigation.

### Task 4: Implement `CoffeeListItem` and `CoffeeDetails`

Create individual components to display coffee items in both list and detailed views. 

The `CoffeeListItem` should show a compact preview with essential information, like the image, name, and price. The `CoffeeDetails` needs to present the comprehensive details about the selected coffee.

### Task 5: Implement Search and Filters

Add search and filter functionality to enhance the user experience. 

The search functionality should include a search input field that automatically updates the URL as users type their queries. Users should be able to filter coffee selections based on different criteria including grind options, roast levels, and flavor profiles. 

The application needs to properly handle URL query parameters to maintain state and enable sharing filtered views. Finally, ensure the `CoffeeList` component updates dynamically to reflect the current search and filter state, providing users with immediate feedback as they refine their selections.

### Task 6: Final Assembly

Put all the pieces together to create the complete coffee browsing experience.

In this final phase, you'll need to ensure that all components are working together harmoniously, with proper URL updates throughout the application. Test the responsive design thoroughly across different screen sizes and verify that both the filtering system and search functionality perform as intended. This comprehensive testing will ensure a smooth and reliable user experience.

## Submission

When you’ve completed the exercise:

1. Commit you changes:

```bash
git add .
git commit -m "Completed Coffee Explorer Exercise"
git push origin main
```

2. Create a Pull Request and submit the the URL of your Pull-Request in the LMS.

## Bonus Challenges

If you finish earlier, or you want to push your skills even further, here are some bonus challenges to explore:

### Task 7 (optional): Implement Favorites

Give the user the ability to mark their favorite coffee selections with a heart icon and access a dedicated favorites page.

This feature should include:

- Ability to toggle favorite status for any coffee
- A new route for viewing all favorited coffees
- Persistence of favorites using localStorage

Remember to update the URL and maintain proper state management when implementing this feature.

### Task 8 (optional): Shopping Cart

Add a shopping cart functionality to allow users to purchase their favorite coffee beans.

Implement features like adding/removing items from the cart, adjusting quantities, and calculating the total price. Use localStorage to persist the cart state between page reloads.

Key features to implement:

- Add to Cart button on detail views
- Cart counter in the navigation showing total items
- Cart page with item management
- Cart summary with total price calculation

## Questions and Answers

<details>
<summary>How do I handle URL parameters in React Router?</summary>
To handle URL parameters in React Router, you can use the `useParams` hook:

```jsx
import { useParams } from "react-router";

function CoffeeDetails() {
    const { id } = useParams();
    // Use the is to filter coffee details
}
```

</details>


<details>
<summary>How do I implement search params?</summary>
To implement search params in React Router, you can use the `useSearchParams` hook:
```jsx
import { useSearchParams } from "react-router";

function CoffeeList() {
    const [searchParams, setSerachParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    // Use search params to filter coffees
}
``` 

</details>