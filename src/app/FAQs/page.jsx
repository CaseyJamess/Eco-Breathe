import FAQs from "./components/FAQS";

function FAQPage() {
  return (
    <div className="w-full mx-auto">
      <header className="text-center max-w-screen-2xl 2xl:mx-auto bg-green-700 rounded-2xl mx-4 px-4 text-stone-50 flex flex-col justify-center p-4 lg:p-8 items-center min-h-[56vh] lg:min-h-[76vh] 2xl:min-h-[50vh]">
        <h1 className="h2">You've got questions...</h1>
        <h2 className="h1 mt-4 lg:mt-8">...We've got your answers!</h2>
      </header>
      <div className="text-page my-16 lg:my-32">
      <FAQs />
      </div>
    </div>
  );
}

export default FAQPage;
