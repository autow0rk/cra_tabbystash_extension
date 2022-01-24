import axios from "axios";
import { useState } from "react";

const SaveTabs = ({ setLoggedIn }) => {
  const [canSendTabData, setCanSendTabData] = useState(true);
  const [clickedSaveTabs, setClickedSaveTabs] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    //console.log("the tab group name: ", tabGroupName);
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
          console.log("success recieved");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function loginUser(event) {
    event.preventDefault();

    const paramsForFormData = new URLSearchParams();
    paramsForFormData.append("email", email);
    paramsForFormData.append("password", password);

    await axios
      .post("http://localhost:5000/auth/passLogin", paramsForFormData)
      .then((res) => {
        console.log("the result from logging in: ", res);
        if (res.data.success) {
          console.log("success recieved");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // async function checkIfUserLoggedIn() {
  //   await axios
  //     .post("http://localhost:5000/auth/storeTabDataFromExtension")
  //     .then((res) => {
  //       if (res.data.success) {
  //         //setLoggedIn(1);
  //       }
  //       //setLoggedIn(0); // if a success message wasn't given by the Flask API (that the user wasn't successfully logged in), then by default (assuming the Flask API is running properly), a error message is given back, meaning that the user is NOT logged in, so we update the state tracking the user being logged in to be a value of 0.
  //     })
  //     .catch((err) => {
  //       setLoggedIn(0); // if there was an error calling the Flask API, then by default the user won't be logged in
  //     });
  // }
  return (
    <div>
      {/* <button onClick={checkIfUserLoggedIn}> */}

      <div className={!clickedSaveTabs ? "" : "hidden"}>
        <button
          onClick={() => {
            setClickedSaveTabs(true);
          }}
          className="text-white text-center text-2xl mb-4 mx-2 px-2 font-bold rounded hover:bg-gray-600"
        >
          Save tabs
        </button>
      </div>
      <div className={clickedSaveTabs ? "" : "hidden"}>
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
      </div>
    </div>
  );
};

//TODO: show "Save tabs" prompt -> if the user clicks, update state of clickedSaveTabs -> make it so that when the component rerenders, based on the state of clickedSaveTabs, the "Name your tab group" prompt shows up -> When the user fills out the name of the tab group, when the click submit -> have an onSubmit for the form handler -> if the form submission fails bc the user isn't logged in, update state of canSendTabData to be false bc the tab data can't be sent -> when the component rerenders, based on the state of canSendTabData, show a "Sign-in" prompt. TL;DR constantly update state and keep thinking of rerendering the component

export default SaveTabs;
