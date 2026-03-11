'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  // write code here
  let curentState = { ...state };
  const result = [];

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        curentState = {};
        break;

      case 'addProperties':
        curentState = { ...curentState, ...action.extraData };
        break;

      case 'removeProperties':
        const nextState = { ...curentState };

        for (const key of action.keysToRemove) {
          delete nextState[key];
        }
        curentState = nextState;
        break;
    }
    result.push(curentState);
  }

  return result;
}

module.exports = transformStateWithClones;
