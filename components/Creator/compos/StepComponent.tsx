export default ({ stepNb }) => {
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <div className={`w-full flex justify-start items-center`}>
      <h3 className=' text-lg font-gilroy-bold text-colorText'>
        STEP : <span className='ml-1'> {stepNb}/6</span>{" "}
      </h3>
      <div className='flex p-2 mx-6 border-2 border-lightGray rounded-2xl'>
        {steps.map((step) => (
          <div
            key={step}
            className={`w-6 h-6 rounded-md mx-1 ${
              step <= stepNb ? "bg-secondaryColor" : "bg-lightGray"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
