### GitHub Trading Cards

Add and collect your favourite coders! 👩🏻‍💻👨🏾‍💻 ⭐️⭐️⭐️⭐️⭐️

[`Deployed version here`](https://admiring-bhaskara-92e55d.netlify.app/)

Screenshot 👀

![](chrome-capture.gif)

Criteria 📝

✔️ Accept some user input (GitHub username)

✔️ Query an API (GitHub)

✔️ Populate the UI with API data (trading cards)

✔️ Have some form of persistent state and interactivity (star ratings ⭐️)

🙆‍♀️ Stretch

✔️ Add CSS 🎨

What we learned 📚 ⚛️

- How to create React Components
- How to use Vite as a bundler and for a dev server 🛠
- How to deploy a React site to Netlify
- How to use React to populate and update a UI
- How to use `fetch` in React
- How to use React Hooks (`useEffect`, `useState)`

Bugs 🐛

- We had an issue where our fetch function was searching with the previous value in our input field (username).

  This was fixed by separating our `useEffect` functions so that they were not chained together.

- We are using the GitHub API ID as our unique key prop 🔑 It's possible to add two cards with the same GitHub username (and therefore the same key). This is causing an issue with our delete function 🗑. To fix this we should generate a unique key for each card as it's added to the UI.

Future Improvements 🕰

- Add a sort or filter function for card list
- Add an album component for users to store their cards
- Add local storage 📦
- Modularise the code into further components
- Add styled components 💅
