// set-up a store of all of the others stores used
import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";

// property of type 'ActivityStore' (a class)
interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
}

// object property of activity, which is a new instance of 'ActivityStore'
export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore()      
}

// React context 
export const StoreContext = createContext(store);

// React Hook to use stores, via the context, inside components
export function useStore() {
    return useContext(StoreContext);
}