function App() {
  const array = [1, 2, 3, 4, 5];

  return (
    <div>
      {array.length > 0 &&
        array.map((item) => {
          return <div key={item}>This is item</div>;
        })}
    </div>
  );
}
