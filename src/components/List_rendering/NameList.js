import React from 'react';
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana'];
  const persons = [
    { id: 1, name: 'Bruce', age: 32, skill: 'React' },
    { id: 2, name: 'Clark', age: 28, skill: 'Angular' },
    { id: 3, name: 'Diana', age: 35, skill: 'Vue' },
  ];

  const personList = persons.map(person => 
    <Person key={person.name} person={person} />
  );

  const nameList = names.map((name, index) => 
    <h2 key={index}>{index} {name}</h2>
  );

  return (
    <div>
      <div>{personList}</div>
      <div>{nameList}</div>
    </div>
  );
}

export default NameList;
