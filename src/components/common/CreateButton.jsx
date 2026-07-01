const CreateButton = ({ children }) => {
  return (
    <>
      <button className="font-sans bg-gradient-to-b from-green-400 to-green-800 text-white px-4 py-2 rounded-md hover:from-green-800 hover:to-green-400 transition duration-300 ease-in-out flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer">
        {children}
      </button>
    </>
  );
};

export default CreateButton;
