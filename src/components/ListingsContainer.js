import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing, onDeleteList}) {

  const [sorted, setSorted] = useState(false)

  const listingArr = listing.map(list => (
    <ListingCard 
      key={list.id}
      list={list}
      onDeleteList={onDeleteList}
      
    />
  ))

  const sortedArr = [...listing]
    sortedArr.sort(function (a, b) {
      return a.location.localeCompare(b.location)
    })
    
    const mappedArr = sortedArr.map(list => (
      <ListingCard 
        key={list.id}
        list={list}
        onDeleteList={onDeleteList}
      />
    ))

  function handleSort() {
    setSorted(sorted => !sorted)
  }

  return (
    <main>
      <button onClick={handleSort} > SORTED </button>
      <ul className="cards">
        {sorted ? mappedArr : listingArr}
      </ul>
    </main>
  );
}

export default ListingsContainer;
