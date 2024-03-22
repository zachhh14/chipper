import LeftSideBar from "./components/LeftSideBar";

function page() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <div className='max-w-screen-lg w-full h-full flex relative'>
        < LeftSideBar />
        {/* <main>Home timeline</main>
        <section>right section</section> */}
      </div>
    </div>
  );
}

export default page;
