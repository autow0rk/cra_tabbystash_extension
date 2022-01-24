import { useState } from "react";
import axios from "axios";
const EnterGroupTabName = ({ setPopupMenuTransition }) => {
  const [tabGroupName, setTabGroupName] = useState("");
  async function getAllTabsInCurrentWindow() {
    var tabInformation = [];

    await browser.tabs.query({ currentWindow: true }).then((tabs) => {
      for (var i = 0; i < tabs.length; i++) {
        tabInformation.push({ tabTitle: tabs[i].title, tabURL: tabs[i].url });
      }
    });

    return tabInformation;
  }
  async function sendTabInfo(event) {
    event.preventDefault();
    const tabGroupNameAsFormData = new URLSearchParams();
    tabGroupNameAsFormData.append("tabGroupName", tabGroupName);

    const tabInformation = await getAllTabsInCurrentWindow();

    console.log("the tab information: ", tabInformation);

    await axios
      .post("http://localhost:5000/auth/storeTabDataFromExtension", {
        tabGroupName: tabGroupName,
        tabData: tabInformation,
      })
      .then((res) => {
        console.log("the result from logging in: ", res);
        if (res.data.success) {
          //console.log("success recieved");
          setPopupMenuTransition(2);
          console.log("inside success for entering group name");
        } else {
          setPopupMenuTransition(3); // if the Flask API didn't respond with a JSON message of "success", then we know that the user isn't signed in, so we transition to a prompt asking the user to sign-in
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // await new Promise(() =>
    //   setTimeout(() => console.log("inside sleep"), 5000)
    // );
    // console.log("is this being executed");
  }
  return (
    <>
      {/* <h1>enter name for group of tabs</h1> */}
      <form onSubmit={sendTabInfo}>
        <div>
          <label
            for="tabGroupName"
            className="block text-sm font-medium text-white mb-1"
          >
            Name for this group of tabs:
          </label>
        </div>
        <div>
          <input
            id="tabGroupName"
            name="tabGroupName"
            type="text"
            value={tabGroupName}
            required
            onChange={(event) => {
              setTabGroupName(event.target.value);
            }}
            className="border-2 border-white bg-gray-700 text-white w-full rounded-md py-1 px-2 mb-2 focus:outline-none focus:border-peach"
          />
        </div>
      </form>
    </>
  );
};

export default EnterGroupTabName;
