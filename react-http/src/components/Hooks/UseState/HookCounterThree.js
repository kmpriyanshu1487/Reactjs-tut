import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: " ", lastName: " " });
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="First Name"
          value={name.firstName}
          onChange={(e) => setName({ ...name,firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={name.lastName}
          onChange={(e) => setName({ ...name,lastName: e.target.value })}
        />
        <h2>Your Firsta name is :{name.firstName}</h2>
        <h2>Your last name is : {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
