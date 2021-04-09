import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Click!')}>
      asdawg
    </ChildAsFC>
  );
};

export default Parent;
