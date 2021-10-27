import React from 'react';
const USER_URL = 'https://api.github.com/users/';

function Card({ name }) {
  const [user, setUser] = React.useState();
  const [card, addCard] = React.useState([]);

  React.useEffect((user) => addCard(user));

  console.log('user info', user);
  console.log('card array', card);

  React.useEffect(() => {
    fetch(USER_URL + name)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [name]);

  if (!user) return <div>Loading...</div>;
  return (
    <div className="card">
      <h1>{user.name}</h1>
      <img src={user.avatar_url} alt="" width="128" height="128" />
      <button>Click me</button>
    </div>
  );
}

export default Card;
