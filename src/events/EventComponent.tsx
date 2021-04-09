const EventComponent: React.FC = () => {
  // Copy paste event type from onChange e property when hovering over e which shows the type definition file
  // onChange={(e) => console.log(e.target.value)}
  // Manually place type to our event handler
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  // Same as above see correct type of event by mousing over e
  // onDragStart={(e) => console.log('im being dragged')}
  // To see a listing of all the different types of React events ctrl+click
  // DragEvent or ChangeEvent or any Event to be taken to type definition file
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  // Typescripts type inference is not applied if function
  // is defined ahead of time
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
