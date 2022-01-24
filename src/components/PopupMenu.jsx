import Logo from "./Logo";
import { useState } from "react";
import SaveTabs from "./SaveTabs";

const PopupMenu = () => {
  const [loggedIn, setLoggedIn] = useState(true); // -1, 0, and 1 used to show different states of if the user is logged in when trying to save tabs. -1 is initial state (user just opened extension/hasn't done anything yet). 0 means they're not logged in, and 1 means they're logged in.
  //   function isUserLoggedIn() {
  //     if (loggedIn == -1) {
  //       return <SaveTabs setLoggedIn={setLoggedIn} />;
  //     } else if (loggedIn == 0){

  //     }
  //   }
  return (
    <div className="flex flex-col mt-4 mx-2">
      {/* <div>
                <h1 className="text-peach">TabbyStash</h1>
            </div> */}
      <Logo />
      <SaveTabs setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default PopupMenu;
