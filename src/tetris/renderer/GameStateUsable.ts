import GameState from '../GameState';
import { Constructor } from '../utils/Mixin';
import { Drawable } from './Renderer';

export type GameStateUsable = Constructor<{
  State: GameState | null,
  ConfigureGameState(state: GameState): void,
}>;

export default function GameStateUsable<TBase extends Drawable>(Base: TBase): TBase & GameStateUsable {
  return class GameStateUsable extends Base {
    State: GameState | null;

    constructor(...args: any[]) {
      super(...args);
      this.State = null;
    }

    ConfigureGameState(state: GameState): void {
      this.State = state;
    }
  };
}