import SvgCatInBox from "./CatInBox";

const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-center w-auto">
        <a className="flex items-center" href="http://localhost:3000">
          <SvgCatInBox />
          <span className="pb-2 pl-1 text-peach font-bold text-xl w-auto">
            {/*create padding between the text of the logo button and the cat box icon*/}
            TabbyStash
          </span>
        </a>
      </div>
    </>
  );
};

export default Logo;
