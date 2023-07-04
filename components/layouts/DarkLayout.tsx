import { FC } from 'react';

export const DarkLayout: FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(128,128,128,0.3)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
