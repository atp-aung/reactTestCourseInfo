const Content = ({ course }) => {
  const pa = course.parts.map((p) => {
    return (
      <div key={p.name}>
        {p.name}
        {p.exercises}
      </div>
    );
  });
  return <div>{pa}</div>;
};

export default Content;
