import Logo from "./Logo";
import { useState } from "react";
import SaveTabs from "./SaveTabs";
import SaveTabButton from "./SaveTabButton";
import EnterGroupTabName from "./EnterGroupTabName";
import SuccessSendingTabs from "./SuccessSendingTabs";
import NotSignedIn from "./NotSignedIn";

const PopupMenu = () => {
  const [loggedIn, setLoggedIn] = useState(true); // -1, 0, and 1 used to show different states of if the user is logged in when trying to save tabs. -1 is initial state (user just opened extension/hasn't done anything yet). 0 means they're not logged in, and 1 means they're logged in.
  const [popupMenuTransition, setPopupMenuTransition] = useState(0);
  // 3 different states to show the 3 different possible versions of the popup menu:
  // (State 0) The "Save tabs" prompt
  // (State 1) The "Enter name for group of tabs:" prompt
  // (State 2) The "Your tabs were saved!" prompt
  // (State 3) The "You need to sign-in at (website url) to save your tabs!" prompt, which shows after not being able to send the tabs because the user isn't signed in

  //   function isUserLoggedIn() {
  //     if (loggedIn == -1) {
  //       return <SaveTabs setLoggedIn={setLoggedIn} />;
  //     } else if (loggedIn == 0){

  //     }
  //   }
  function itemToRenderInPopupMenu() {
    if (popupMenuTransition === 0) {
      return <SaveTabButton setPopupMenuTransition={setPopupMenuTransition} />;
    } else if (popupMenuTransition === 1) {
      return (
        <EnterGroupTabName setPopupMenuTransition={setPopupMenuTransition} />
      );
    } else if (popupMenuTransition === 2) {
      return (
        <SuccessSendingTabs setPopupMenuTransition={setPopupMenuTransition} />
      );
    } else if (popupMenuTransition === 3) {
      return <NotSignedIn />;
    }
  }
  return (
    <div className="flex flex-col mt-4 mx-2">
      {/* <div>
                <h1 className="text-peach">TabbyStash</h1>
            </div> */}
      <Logo />
      {/* <SaveTabs setLoggedIn={setLoggedIn} /> */}
      {itemToRenderInPopupMenu()}
    </div>
  );
};

export default PopupMenu;
