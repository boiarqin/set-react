import React from 'react';
import ReactDOM from 'react-dom';
import * as R from 'ramda';
import { allSetCards, shuffleArray } from '../utils';

describe('Card Deck helper function', ()=>{
  it('creates 81 set cards', () => {
    const deck = allSetCards;
    expect(deck.length).toEqual(81);
  });

  it('creates 81 unique set cards', () => {
    const deck = allSetCards;
    expect(R.uniq(deck).length).toEqual(81);
  });

  it('shuffling maintains 81 unique set cards', () => {
    const deck = allSetCards;
    expect(R.uniq(shuffleArray(deck)).length).toEqual(81);
  });

  it('has 27 red cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.color === 'red').length).toEqual(27);
  });
  it('has 27 green cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.color === 'green').length).toEqual(27);
  });
  it('has 27 purple cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.color === 'purple').length).toEqual(27);
  });

  it('has 27 empty cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.fill === 'empty').length).toEqual(27);
  });
  it('has 27 striped cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.fill === 'striped').length).toEqual(27);
  });
  it('has 27 solid cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.fill === 'solid').length).toEqual(27);
  });

  it('has 27 cards with 1 symbol', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.number === 1).length).toEqual(27);
  });
  it('has 27 cards with 2 symbols', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.number === 2).length).toEqual(27);
  });
  it('has 27 cards with 3 symbols', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.number === 3).length).toEqual(27);
  });

  it('has 27 oval cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.shape === 'oval').length).toEqual(27);
  });
  it('has 27 squiggle cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.shape === 'squiggle').length).toEqual(27);
  });
  it('has 27 diamond cards', () => {
    const deck = allSetCards;
    expect(deck.filter(c => c.shape === 'diamond').length).toEqual(27);
  });
});