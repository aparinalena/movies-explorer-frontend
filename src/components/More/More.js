import "./More.css";

function More(props) {
  const { setAmountShowCards, amountShowCards, addShowCards } = props;
  return (
    <div className="more">
      <button
        className="more__button link-opacity"
        onClick={() => {
          setAmountShowCards(amountShowCards + addShowCards);
        }}
      >
        Ещё
      </button>
    </div>
  );
}

export default More;
