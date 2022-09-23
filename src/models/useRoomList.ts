import { useRequest } from 'umi';
import { queryRoomList } from '@/services/room';
export default function useRoomList(params:number[]) {
    const msg = useRequest(() => queryRoomList(params));
    console.log('model',msg);
    return {
      dataSource: msg,
    };
  }