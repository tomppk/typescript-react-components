// Define props we expect Child component to receive
interface ChildProps {
  color: string;
}

// Destructure color out of props
// In this definition Typescript does not know this is a
// React function component. So no access to React component
// properties eg. Child.displayName
export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// Another way of defining a React function component.
// Component will receive props of type ChildProps
// Identical React.FunctionComponent
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
