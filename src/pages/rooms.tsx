import { useModel } from 'umi';
import RoomList from '@/components/RoomList';

const Rooms = () => {
  const {dataSource} = useModel('useRoomList');
  console.log(dataSource.data);
  return (
    <div>
      <RoomList key="rl" rooms={dataSource.data} />
    </div>
  );
};

export default Rooms;