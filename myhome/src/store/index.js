import {create} from 'zustand';
import {persist,createJSONStorage} from 'zustand/middleware';
const asyncFetchData = (time) => {
  // resolve成功, reject失败
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
            // 初始值
            count: 0,
            // 加
            increasement: () => set(state => ({ count: state.count + 1 })),
            // 减
            decreasement: () => set(state => ({ count: state.count - 1 })),
            // 重置
            reset: () => set({ count: 0 }),
            // 异步
            getData: async () => {
                let data = await asyncFetchData(2000);
                set({count: data})
            },
            // x2
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