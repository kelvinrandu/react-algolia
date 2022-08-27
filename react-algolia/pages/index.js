import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  Highlight,
  Snippet,
} from "react-instantsearch-hooks-web";


function Hit({ hit }) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      <Snippet hit={hit} attribute="description" />
    </article>
  );
}

export default function Home() {
const searchClient = algoliasearch(
  "1UEDDG88UX",
  "793ca3dee6788aae3b155f63c8908143"
);
  return (
    <InstantSearch indexName="instant_search" searchClient={searchClient}>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}
