






const initialState = {

  loader:false
};

type initialAppState = typeof initialState 





export const appReducer = (
  state: initialAppState = initialState,
  action: ActionAppType
): initialAppState => {
  switch (action.type) {
    case 'CHANGE-STATUS-LOADER':{
      return {...state,loader:action.status}
    }

    default:
      return state;
  }
};

export const appLoader = (status:boolean) =>
  ({ type: "CHANGE-STATUS-LOADER",status } as const);

type appLoaderType = ReturnType<typeof appLoader >
export type ActionAppType = appLoaderType
//////////////////THUNKS




// ////////////////////////////////
