import React from 'react';

interface SwitchProps {
  expression: string | number;
  children: React.ReactNode;
}

interface CaseProps {
  value: string | number;
  children: React.ReactNode;
}

const Case: React.FC<CaseProps> = ({ value, children }) => {
  return value ? <>{children}</> : null;
};

const Switch: React.FC<SwitchProps> = ({ expression, children }) => {
  let defaultCase: React.ReactNode = null;

  // Find the default case
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === Case && !child.props.value) {
      defaultCase = child;
    }
  });

  // Find the matching case
  const matchingCase = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === Case && child.props.value === expression
  );

  return matchingCase || defaultCase || null;
};

export { Switch, Case };
