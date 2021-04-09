// Define props we expect Child component to receive
interface ChildProps {
  color: string;
  onClick: () => void;
}

// Destructure color and onClick out of props
// In this definition Typescript does not know this is a
// React function component. So no access to React component
// properties eg. Child.displayName or React props children
// unless defined in our ChildProps interface
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// Another way of defining a React function component.
// Component will receive props of type ChildProps
// Identical React.FunctionComponent
// Advantage when defining this way is that it expects
// to receive children prop so can have some content between
// opening and closing braces when used in different component
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
