import React from 'react'
import Header from '../Header';
import './Learn.css';
import { LearnCard } from '../LearnCard';

const Learn = ({deckID}) => {
  return (
    <div class="learnPage">
        <Header />
        <LearnCard front="What are the typical O(n) time complexities?" back="The usual time complexities are: O(1), O(log(N)), O(n), O(nlog(n)), O(n^2) and O(n!)."/>
    </div>
    
  )
}

export default Learn;
