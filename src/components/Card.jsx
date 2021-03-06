import React from 'react';
import Counter from './Counter';
import '../css/App.css';

const USER_URL = 'https://api.github.com/users/';

function Card({ name }) {
  const [user, setUser] = React.useState();
  const isMounted = React.useRef(false);
  const [cards, addCard] = React.useState([
    {
      id: 43313455,
      name: 'Anna Cunnane',
      avatar_url: 'https://avatars.githubusercontent.com/u/43313455?v=4',
      public_repos: 17,
      html_url: 'https://github.com/Moggach',
    },
    {
      id: 37059,
      name: 'D Sofer',
      avatar_url: 'https://avatars.githubusercontent.com/u/37059?v=4',
      public_repos: 56,
      html_url: 'https://github.com/sofer',
    },
    {
      id: 72146072,
      name: 'Michael Williams',
      avatar_url: 'https://avatars.githubusercontent.com/u/72146072?v=4',
      public_repos: 18,
      html_url: 'https://github.com/MJOW1999',
    },
  ]);

  React.useEffect(() => {
    //error handling to prevent empty card on page load or user adding an empty card
    if (name === undefined || name === '') {
      return;
    }
    fetch(USER_URL + name)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        return user;
      });
  }, [name]);

  React.useEffect(() => {
    if (user === undefined) {
      return;
    }
    let temp = [...cards];
    temp.unshift(user);
    if (temp.includes(user.id)) {
      console.log('duplicate!');
    }
    addCard(temp);
  }, [user]);

  function handleRemove(id) {
    const newList = cards.filter((card) => card.id !== id);
    addCard(newList);
  }

  if (!cards.length) {
    return (
      <div>
        <h1>No cards... 🙃</h1>
        <h2>
          Add some cards to to your collection{' '}
          <span aria-label="hand pointing up">👆</span>{' '}
        </h2>
      </div>
    );
  } else if (cards.length > 12) {
    cards.length = 0;
    return (
      <div>
        <h1>Too many cards!</h1>
        <h2>
          Restart your collection{' '}
          <a href="javascript:window.location.reload(true)">here</a>{' '}
        </h2>
      </div>
    );
  }
  return (
    <div>
      {cards.map((card, index) => (
        <div className="card" key={card.id}>
          <h1>{card.name}</h1>
          <img className="avatar" src={card.avatar_url} alt={card.name} />
          <p>Repos: {card.public_repos}</p>
          <a href={card.html_url} target="_blank">
            Profile 🔗
          </a>

          <Counter />

          <button
            className="trash-button"
            onClick={() => handleRemove(card.id)}
          >
            Remove this card 🗑️
          </button>

          <span>
            {index + 1}/{cards.length}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Card;
