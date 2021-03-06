import GameInput from '../GameInput';
import { VisibleGameState } from '../GameState';
import Player from './Player';
import InputDelayable from './InputDelayable';
import { AI_ACTION_DELAY } from '../Consts';

/**
 * An AI must have its APM constrained
 */
export default class AIPlayer extends InputDelayable(Player) {

  constructor() {
    super();
    this.ConfigureInputDelayable(AI_ACTION_DELAY);
  }

  Update(_gameState: VisibleGameState, _acceptInput: boolean): GameInput {
    return GameInput.None;
  }
}