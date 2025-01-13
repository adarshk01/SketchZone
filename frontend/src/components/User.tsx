export function User() {
  return (
    <div>
      <div className="  h-96 p-5   rounded-xl drop-shadow-2xl bg-gradient-to-t from-blue-600 from-40% to-blue-500">
        <div className="text-white text-lg font-medium font-cream select-none">
          Players
        </div>
        <div className="mt-5 font-cream text-white">
          <div className="flex gap-2">
            <div className="text-xs h-8 w-8 bg-white rounded-full text-black flex justify-center items-center">
              P1
            </div>
            <div className="flex items-center">Player1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
