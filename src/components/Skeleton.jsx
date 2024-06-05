


function Skeleton() {
    return (
      <div className="flex flex-col gap-1 aspect-[4/5] w-[400px] rounded-lg bg-gray-300 animate-pulse">
        <div className="aspect-[4/5] w-[400px] bg-gray-300 bg-cover bg-center rounded-lg">
          <div className="relative rounded-lg shadow-lg flex items-center justify-center h-full">
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          
        </div>
  
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 pl-5 pb-3">
            <div className="font-bold">
              <div className="rounded-full bg-gray-200 w-24 h-6 mb-2"></div>
            </div>
            <div className="font-sem pr-5">
              <div className="rounded-full bg-gray-200 w-32 h-6 mb-2"></div>
            </div>
          </div>
  
          <div className="flex justify-center items-center pr-5">
            <div className="text-gray-200 items-center flex justify-center w-20">
              <div className="rounded-full bg-gray-200 w-6 h-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skeleton;
  