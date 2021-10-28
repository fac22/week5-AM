import React from 'react';
import Cards from './Cards.jsx';

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
      <Cards name={name} />
    </article>
  );
}

export default Search;
