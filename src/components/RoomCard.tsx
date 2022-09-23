import { Card, Row, Col } from 'antd';
const RoomCard: React.FC<{
  room: { id: number; name: string; state: number };
}> = ({ room }) => {
  return (
    <>
      <Card title={room.name} bordered={true} style={{ width: 300,background:'skyblue'}}>
        <p>{room.id} </p>
        <p>{room.state} </p>
      </Card>
    </>
  );
};
export default RoomCard;
