import React from 'react';
const USER_URL = 'https://api.github.com/users/';

function Card({ name }) {
  const [user, setUser] = React.useState();
  const [card, addCard] = React.useState([]);
  
  // console.log('user info', user);
  // console.log('card array', card);
  const containerArray = [];
  

  React.useEffect(() => {
    fetch(USER_URL + name)
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        console.log("set user", setUser(data))
        return user})
      .then((user) => {
        let temp = [...card];
        temp.push(user);
        addCard(temp)
        console.log("Cards", card)
        return card})
      // .then(() => {
      //   containerArray.push(card)
      //   console.log("Container array", containerArray)
      // return containerArray});
  }, [name]);

    React.useEffect(() => {
      console.log("Card", card);
      // return containerArray.push(card);
    }, [card])


  

  if (!user) return <div>Loading...</div>;
  return (
    // <div className="card">
    //   <h1>{user.name}</h1>
    //   <img src={user.avatar_url} alt="" width="128" height="128" />
    //   <button>Click me</button>
    // </div>
    <div className="card"></div>
  );
}

export default Card;
