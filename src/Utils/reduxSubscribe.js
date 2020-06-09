export const subscribe = (
  actionType,
  worker
) => (next, dispatch, getState) =>
    (action) => {
      const isWatchedAction =
        typeof actionType !== 'string'
          ? actionType.indexOf(action.type) !== -1
          : actionType === action.type;

      if (isWatchedAction) {
        worker({ action, next, dispatch, getState });
      } else {
        next(action);
      }
    };