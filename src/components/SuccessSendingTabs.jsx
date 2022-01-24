const SuccessSendingTabs = ({ setPopupMenuTransition }) => {
  function showSuccessMessage() {
    return (
      <h1 className="text-green-500 font-2xl font-bold mb-4 mx-2 px-2">
        Success! Your tabs have been saved successfully!
      </h1>
    );
  }
  function transitionBackToSaveTabs() {
    setTimeout(() => {
      setPopupMenuTransition(0);
    }, 3000);
  }
  return (
    <>
      {showSuccessMessage()}
      {transitionBackToSaveTabs()}

      {/* {setTimeout(() => {
        setPopupMenuTransition(0);
      }, 3000)} */}
    </>
  );
};
export default SuccessSendingTabs;
