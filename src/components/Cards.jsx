import React, { useState, useEffect } from 'react';
import LikesCounter from './LikesCounter';

const USER_URL = 'https://api.github.com/users/';

function Cards({ name }) {
  const [user, setUser] = useState();
  const [cards, addCard] = useState([]);

  useEffect(() => {
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

  function handleRemove(id) {
    const newList = filteredCards.filter((card) => card.id !== id);
    addCard(newList);
  }

  const filteredCards = cards.filter((card) => card !== undefined);
  console.log(filteredCards);
  const cardList = filteredCards.map((card) => (
    <div key={card.id}>
      <p>{card.name}</p>
      <p>
        <img src={card.avatar_url}></img>
      </p>
      <LikesCounter />
      <button type="button" onClick={() => handleRemove(card.id)}>
        Remove
      </button>
    </div>
  ));
  return <div>{cardList}</div>;
}

export default Cards;
