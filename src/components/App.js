import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listing, setListing] = useState([])
const [searchForm, setSearchForm] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListing(data))
}, [])

function handleDeleteList(deletedListing){
  const updatedListing = listing.filter(listing => (
    listing.id !== deletedListing.id
  ))
  setListing(updatedListing)
}

const displayedListings = listing.filter(listing => (
  listing.description.toLowerCase().includes(searchForm.toLowerCase())
))

  return (
    <div className="app">
      <Header onSearch={setSearchForm} />
      <ListingsContainer listing={displayedListings} onDeleteList={handleDeleteList} />
    </div>
  );
}

export default App;
