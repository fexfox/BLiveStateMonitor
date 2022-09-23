// export function queryRoomList(rooms:number[]) {
//     return fetch('/api/products').then(res => res.json());
//   }
  export function queryRoomList(rooms:number[]) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data:[
          {
            id: 1,
            name: 'dva',
            state:0
          },
          {
            id: 2,
            name: 'antd',
            state:0
          },
          {
            id: 1,
            name: 'dva',
            state:0
          },
          {
            id: 2,
            name: 'antd',
            state:0
          },
          {
            id: 1,
            name: 'dva',
            state:0
          },
          {
            id: 2,
            name: 'antd',
            state:0
          },
        ]});
      }, 1000);
    });
  }