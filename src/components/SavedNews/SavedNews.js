import React from "react";
import "./SavedNews.css";
import { SavedNewsCardList } from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews() {
  return (
    <section className="saved-news">
      <SavedNewsHeader />
      <SavedNewsCardList savedCard />
    </section>
  );
}

export default SavedNews;