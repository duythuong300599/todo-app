import { List } from "antd";
import ButtonDelete from "../../atoms/ButtonDel";
import ButtonEdit from "../../atoms/ButtonEdit";

interface Props {
  item: string;
  index: number;
}

const TodoItem: React.FC<Props> = ({ item, index }) => {
  return (
    <>
      <List.Item
        key={index}
        actions={[
          <ButtonEdit item={item} index={index} />,
          <ButtonDelete index={index} />,
        ]}
      >
        {item}
      </List.Item>
    </>
  );
};

export default TodoItem;
