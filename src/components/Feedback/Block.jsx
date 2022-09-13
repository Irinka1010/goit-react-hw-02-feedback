export const Block = ({ title, children }) => {
  return (
    <div className="">
      <h2 className="">{title}</h2>
      {children}
    </div>
  );
};
