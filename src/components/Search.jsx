import React from 'react';
import Card from './Card.jsx';
import '../css/Search.css';

function Search() {
  const [name, setName] = React.useState();
  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.username.value);
        }}
      >
        <label htmlFor="username">Select a GitHub user!</label>
        <input
          type="search"
          aria-label="Search users"
          placeholder="Search users"
          name="username"
        />
        <span>
          Create a collection of no more than <b>12</b> cards!
        </span>
      </form>
      <Card name={name} />
    </article>
  );
}

export default Search;
