// action types
const TAB_CHANGED = 'TAB_CHANGED';

// action creators
export const tabChanged = selectedTab => {
  return { type: TAB_CHANGED, selectedTab };
};

// reducers
const selectedTabReducer = (state = 0, action) => {
  switch (action.type) {
    case TAB_CHANGED:
      return action.selectedTab;
    default:
      return state;
  }
};

export default selectedTabReducer;
