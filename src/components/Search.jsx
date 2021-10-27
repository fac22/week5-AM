import React from 'react';
import Card from './Card.jsx';

function Search() {
  const [name, setName] = React.useState('');
  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.username.value);
        }}
      >
        <input
          type="search"
          aria-label="Search users"
          placeholder="Search users"
          name="username"
        />
      </form>
      <Card name={name} />
    </article>
  );
}

export default Search;