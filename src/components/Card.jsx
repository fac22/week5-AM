import React from 'react';
const USER_URL = 'https://api.github.com/users/';

function Card({ name }) {
  const [user, setUser] = React.useState();
  const [cards, addCard, removeCard] = React.useState([
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/72146072?v=4',
      name: 'Michael Williams',
      repos_url: 'https://api.github.com/users/MJOW1999/repos',
      message: 'blank message',
    },
  ]);

  React.useEffect(() => {
    fetch(USER_URL + name)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        return user;
      })
      .then((user) => {
        let temp = [...cards];
        temp.push(user);
        addCard(temp);
        return cards;
      });
  }, [name]);

  function handleRemove(message) {
    const newList = filteredCards.filter((card) => card.message !== message);
    addCard(newList);
  }

  const filteredCards = cards.filter((card) => card !== undefined);

  const cardList = filteredCards.map((card) => (
    <div>
      <p>{card.message}</p>
      <p>{card.documentation_url}</p>
      <button type="button" onClick={() => handleRemove(card.message)}>
        Remove
      </button>
    </div>
  ));
  return <div>{cardList}</div>;
}

export default Card;
