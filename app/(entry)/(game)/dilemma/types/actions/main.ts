import { Player } from 'aws-sdk/clients/gamelift';
import { Card } from '../card/main';
import { QuadrantPosition } from '../quadrants/quadrant/main';

const gameActions = () => {
  function playCard(player: Player, card: Card, quadrant: QuadrantPosition) {
    // Check if player has card
    // Check if player has enough value
    // Check if quadrant is open
    // Play card in quadrant
    // Remove card from player
    // Next Turn
  }

  function passPlay() {
    // Pass Play
    // Next Turn
  }

  // Cards
  // Sums
  // Maxes
  // Deadlocks
  // Flips

  function calculateSums() {

  }

  function calculateOutcome() {
    
  }


  function calculateTax() {

  }

  function flip() {

  }

  function followPlay(player: Player, card: Card) {
    // Check if player has card
    // Check if player has enough value
    // Get previous quadrant
    // Get equivalent quadrant
    // Play card in quadrant
    // Remove card from player
    // Next Turn
  }

  function foldDraw() {
    // Remove Player from Round
    // Next Turn
  }

  function revealQuadrant(quadrant: QuadrantPosition) {
    // Reveal Quadrant
  }

  return {
    revealQuadrants: revealQuadrant,
  };
};
