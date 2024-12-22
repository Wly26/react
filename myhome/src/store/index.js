import {create} from 'zustand';
import {persist,createJSONStorage} from 'zustand/middleware';

const asyncFetchData = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(200);
      }, time);
    });
}
// 创建一个简单的计数器store
const useAppStore = create(
    // 数据持久化
    persist(
        (set,get) => ({
            count: 0,
            increasement: () => set(state => ({ count: state.count + 1 })),
            decreasement: () => set(state => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),
            getData: async () => {
                let data = await asyncFetchData(2000);
                set({count: data})
            },
            dbcount:()=>{
                let val = get().count * 2;
                set({ count: val });
            }
        }),
        {
            name: 'userStore', 
            storage: createJSONStorage(() => localStorage)
        }
    )
)
export default useAppStore;