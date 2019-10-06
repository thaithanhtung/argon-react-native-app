import { createAction, createReducer } from "redux-act";

const POST_FIX = `HOME/`;

const getHomePageAct = createAction(`${POST_FIX}GET_HOME_PAGE`);

export const getHomePage = () => dispatch => {
  dispatch(getHomePageAct({ test: "CCCC" }));
};

const initialState = {
  data: {},
  ui: {}
};

export default createReducer(
  {
    [getHomePageAct]: (state, homeData) => {
      return {
        ...state,
        data: {
          ...state.data,
          ...homeData
        }
      };
    }
  },
  initialState
);
