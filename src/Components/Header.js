// import { Link } from "react-router-dom";

const Header = () => (
  <div className="flex justify-between px-52 items-center h-14 bg-[#2C3E50] sticky top-0">
    {/* <img className="h-5 w-5 ml-0" src="https://media.istockphoto.com/id/1373245842/vector/calendar-with-check-mark-icon-with-long-shadow-on-blank-background-flat-design.jpg?s=612x612&w=0&k=20&c=rPRRjRgWIqg5ev49MRi-CRwR2NBSnNyj8fj5i36U9D4=" /> */}
    <div className=" flex items-center">
      <h2 className="ml-2 font-rajdhani text-3xl text-white">SCHEDLR</h2>
    </div>
    <div className="flex justify-center no-underline">
      <ul className="flex justify-center no-underline">
        <li className="hover:bg-slate-500 mx-2 p-1 px-2 rounded-lg text-white">
        Dashboard
        </li>
        <li className="hover:bg-slate-500 mx-2 p-1 px-2 rounded-lg text-white">
        CreatePost
        </li>
        <li className="hover:bg-slate-500 mx-2 p-1 px-2 rounded-lg text-white">
          MarketPlace
        </li>
        <li className="hover:bg-slate-500 mx-2 p-1 px-2 rounded-lg text-white">
        Insights
        </li>
        <li className="hover:bg-slate-500 mx-2 p-1 px-2 rounded-lg text-white">
          MyProfile
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
