import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'
import itemTypes from './hooks/Card'

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
  };
  
const Todo = ({todo}) => {
    const {title,description,deadline,priority} = todo
    const [{isDragging}, drag] = useDrag({
        type: itemTypes.CARD,
        item:{todo},
        end:(item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
              alert(`You dropped ${item.name} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
          }),
    })
    const opacity = isDragging ? 1 : 1;
  return (
    <div>
        
      <div ref={drag} style={{ ...style, opacity }}>
        <p>{title}</p>
        <p>{description}</p>
        <p>{priority}</p>
        <p>{deadline}</p>
      </div>
    </div>
  )
}

Todo.propTypes = {
    todo: PropTypes.object

}

export default Todo
