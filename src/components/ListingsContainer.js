import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing, onDeleteList}) {

  const listingArr = listing.map(list => (
    <ListingCard 
      key={list.id}
      list={list}
      onDeleteList={onDeleteList}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingArr}
      </ul>
    </main>
  );
}

export default ListingsContainer;
