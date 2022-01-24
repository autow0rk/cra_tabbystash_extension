const NotSignedIn = () => {
  return (
    <div className="mb-2">
      <h1 className="text-white font-2xl font-bold">
        You need to{" "}
        <a
          href="http://localhost:3000/loginPage"
          className="text-peach underline"
        >
          sign-in
        </a>{" "}
        to save your tabs!
      </h1>
    </div>
  );
};

export default NotSignedIn;
