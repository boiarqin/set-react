import React from 'react';
import ReactDOM from 'react-dom';
import * as R from 'ramda';
import { isSet } from '../utils';

describe('correctly determine that 3 cards are a set', ()=>{
  it('differ by number', () => {
    const cards = [{
        number: 1,
        color: 'red',
        shape: 'oval',
        fill: 'solid'
    },{
        number: 2,
        color: 'red',
        shape: 'oval',
        fill: 'solid'
    },{
        number: 3,
        color: 'red',
        shape: 'oval',
        fill: 'solid'
    }]
    expect(isSet(cards)).toEqual(true);
  });
  it('differ by color', () => {
    const cards = [{
        number: 2,
        color: 'red',
        shape: 'oval',
        fill: 'solid'
    },{
        number: 2,
        color: 'green',
        shape: 'oval',
        fill: 'solid'
    },{
        number: 2,
        color: 'purple',
        shape: 'oval',
        fill: 'solid'
    }]
    expect(isSet(cards)).toEqual(true);
  });
  it('differ by shape', () => {
    const cards = [{
        number: 2,
        color: 'red',
        shape: 'oval',
        fill: 'solid'
    },{
        number: 2,
        color: 'red',
        shape: 'diamond',
        fill: 'solid'
    },{
        number: 2,
        color: 'red',
        shape: 'squiggle',
        fill: 'solid'
    }]
    expect(isSet(cards)).toEqual(true);
  });
  it('differ by fill', () => {
    const cards = [{
        number: 2,
        color: 'red',
        shape: 'squiggle',
        fill: 'solid'
    },{
        number: 2,
        color: 'red',
        shape: 'squiggle',
        fill: 'empty'
    },{
        number: 2,
        color: 'red',
        shape: 'squiggle',
        fill: 'striped'
    }]
    expect(isSet(cards)).toEqual(true);
  });

  it('differ by all 4 dimensions', () => {
    const cards = [{
        number: 2,
        color: 'red',
        shape: 'oval',
        fill: 'striped'
    },{
        number: 1,
        color: 'green',
        shape: 'diamond',
        fill: 'empty'
    },{
        number: 3,
        color: 'purple',
        shape: 'squiggle',
        fill: 'solid'
    }]
    expect(isSet(cards)).toEqual(true);
  });
});

describe('correctly determine that 3 cards are not a set', ()=>{
    it('same color and shape', () => {
        const cards = [{
            number: 1,
            color: 'red',
            shape: 'oval',
            fill: 'solid'
        },{
            number: 2,
            color: 'red',
            shape: 'oval',
            fill: 'solid'
        },{
            number: 2,
            color: 'red',
            shape: 'oval',
            fill: 'empty'
        }]
        expect(isSet(cards)).toEqual(false);
    });
    it('same color and number', () => {
        const cards = [{
            number: 1,
            color: 'purple',
            shape: 'oval',
            fill: 'solid'
        },{
            number: 1,
            color: 'purple',
            shape: 'oval',
            fill: 'empty'
        },{
            number: 1,
            color: 'purple',
            shape: 'diamond',
            fill: 'empty'
        }]
        expect(isSet(cards)).toEqual(false);
    });
    it('same color and fill', () => {
        const cards = [{
            number: 3,
            color: 'purple',
            shape: 'oval',
            fill: 'solid'
        },{
            number: 3,
            color: 'purple',
            shape: 'oval',
            fill: 'empty'
        },{
            number: 3,
            color: 'purple',
            shape: 'diamond',
            fill: 'empty'
        }]
        expect(isSet(cards)).toEqual(false);
    });
});