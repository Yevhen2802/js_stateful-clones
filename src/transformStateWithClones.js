'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let currentState = { ...state };
  const stateHistory = [];

  for (const types of actions) {
    if (types.type === 'addProperties') {
      currentState = { ...currentState, ...types.extraData };
    }

    if (types.type === 'clear') {
      currentState = {};
    }

    if (types.type === 'removeProperties') {
      currentState = { ...currentState };
      types.keysToRemove.forEach((key) => delete currentState[key]);
    }

    stateHistory.push(currentState);
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
