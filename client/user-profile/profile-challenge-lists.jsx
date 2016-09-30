import React from 'react';
import ListItem from '../userChallenges/listItem';

export default function mapChallenges(listContent) {
  return listContent.map((each, i) => {
    console.log('CONTENTS!!!!', listContent);
    return (
      <ListItem
        key={i}
        challengeId={each._id}
        name={each.name}
        difficulty={each.difficulty}
        testCases={null}
      />
    );
  });
}
