export const metadata = {
  title: "Blog Page ",
  description: "Creative Thoughts Agency Webpage is here to give you the best",
};

const Bloglayout = ({ children }) => {
  return (
    <div>
      {/* <p>Bloglayout</p> */}
      <div>{children}</div>
    </div>
  );
};

export default Bloglayout;
