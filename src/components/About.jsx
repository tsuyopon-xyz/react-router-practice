import React from 'react';

function About(props) {
  const match = props.match;
  console.log(match);

  console.log(match.params.id, ' : idは？');

  return (
    <h1>
      Aboutです
    </h1>
  );
}

export default About;
