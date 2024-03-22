import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsEnvelope, BsThreeDots, BsTwitter } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Message",
    icon: BsEnvelope,
  },
  {
    title: "Bookmark",
    icon: BiUser,
  },
];

const LeftSideBar = () => {
  return (
    <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
      <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className='hover:bg-white/10 transition duration-200 text-2xl rounded-3xl 
                flex items-center justify-start w-fit space-x-4 py-2 px-6'
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button
          className='rounded-full m-4 bg-primary p-4 text-center 
              hover:bg-opacity-70 transition duration-200'
        >
          Tweet
        </button>
      </div>
      <button
        className='rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center 
            hover:bg-white/10 transition duration-200 w-full justify-between'
      >
        <div className='flex items-center space-x-2'>
          <div className='rounded-full bg-slate-400 w-8 h-8'></div>
          <div className='text-left text-sm'>
            <div className='font-semibold'>Zachary Tecson</div>
            <div className=''>@zachtcsn</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSideBar;
