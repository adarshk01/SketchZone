export function Chat() {
  return (
    <div>
      <div className="  h-[560px]  max-w-full bg-gradient-to-t from-blue-600 from-40% to-blue-500 p-5 rounded-xl drop-shadow-2xl opacity-85">
        <div className="text-white text-lg font-medium font-cream select-none">
          Chat
        </div>
        <div className="  h-[430px]  "></div>
        <div className=" w-max flex gap-2  mt-6">
          <input
            type="text"
            className="bg-blue-600  outline-none border-b-blue-700 focus:border-b-neutral-100 border-b-2 text-white font-cream
            transtition-color duration-300 ease-in focus:placeholder-white  "
            placeholder="Type..."
          />
          <div className="h-9 w-9 bg-white rounded-full flex justify-center items-center  cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#3b82f6"
              viewBox="0 0 24 24"
              id="send"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.75837 8.27227L20.4913 2.06576C21.3868 1.75232 22.2477 2.61317 21.9342 3.50873L15.7277 21.2416C15.3889 22.2097 14.0406 22.2647 13.624 21.3274L10.4312 14.1437C10.3174 13.8875 10.1125 13.6826 9.85632 13.5688L2.67255 10.376C1.73531 9.95943 1.79032 8.61109 2.75837 8.27227zM10.5 13.5L21.5 2.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
