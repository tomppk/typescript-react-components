// Define props we expect Child component to receive
interface ChildProps {
  color: string;
}

// Destructure color out of props
export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};
