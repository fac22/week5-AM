import React from 'react';
import Card from './Card.jsx';
import '../css/Search.css';

function Search() {
  const [name, setName] = React.useState('oliverjam');
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
        <span>Warning: Maximum <b>12</b> cards in your collection!</span>
      </form>
      <Card name={name} />
    </article>
  );
}

export default Search;
