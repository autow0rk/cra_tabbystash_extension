const SaveTabButton = ({ setPopupMenuTransition }) => {
  return (
    <div>
      <button
        onClick={() => {
          setPopupMenuTransition(1);
        }}
        className="text-white text-center text-2xl mb-4 mx-2 px-2 font-bold rounded hover:bg-gray-600"
      >
        Save tabs
      </button>
    </div>
  );
};
export default SaveTabButton;
