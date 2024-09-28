const PingLoading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full absolute z-40">
        <div className="flex justify-center items-center rounded-full h-16 w-16 lg:h-32 lg:w-32 delay-700 bg-gray-100  animate-ping duration-700">
          <div className="flex justify-center items-center rounded-full h-11 w-11 lg:h-24 lg:w-24 delay-500 bg-gray-200  animate-ping duration-700">
            <div className="flex justify-center items-center rounded-full h-6 w-6 lg:w-16 lg:h-16 bg-gray-400  animate-ping delay-300 duration-700">
              <div className="rounded-full h-2 w-2 lg:h-5 lg:w-5 bg-gray-600  animate-ping duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PingLoading;
