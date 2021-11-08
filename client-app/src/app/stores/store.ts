// set-up a store of all of the others stores used
import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";

// property of type 'ActivityStore' (a class)
interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
}

// object property of activity, which is a new instance of 'ActivityStore'
export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore()    
}

// React context 
export const StoreContext = createContext(store);

// React Hook to use stores, via the context, inside components
export function useStore() {
    return useContext(StoreContext);
}