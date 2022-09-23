import { Card, Row, Col } from 'antd';
import RoomCard from './RoomCard';
import styles from './RoomList.less';
const RoomList: React.FC<{ rooms: [] }> = ({ rooms }) => {
  console.log(rooms);
  return (
    <>
      <div className={styles.container}>
        <Row gutter={[4, 4]}>
          {rooms&&rooms.map((r,index) => {
            return (
              <Col span={4}>
                <RoomCard key={r} room={r}></RoomCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default RoomList;
