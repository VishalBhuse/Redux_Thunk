import { GET_FEEDS_ERROR, GET_FEEDS_LOADING, GET_FEEDS_SUCCESS } from "./feed.types";

const initilastate = {
  getfeed: {
    loading: false,
    error: false,
  },
  data: [],
};

export const feedreducer = (state = initilastate, { type, payload }) => {
  switch (type) {
  
      
      case GET_FEEDS_LOADING :{
          return{
              ...state,
              getfeed:{
                ...state.getfeed,
                loading:true,
                error:false,
              }
            }
        }
        
        case GET_FEEDS_SUCCESS :{
            return{
                ...state,
                getfeed:{
                    ...state.getfeed,
                    loading:false,
                    error:false,
                  },
                  data:payload,                
            }
        }
        
        case GET_FEEDS_ERROR :{
            return{
                ...state,
                getfeed:{
                    ...state.getfeed,
                    loading:false,
                    error:true,
                  }
            }
        }

    default: {
      return state;
    }
  }
};
