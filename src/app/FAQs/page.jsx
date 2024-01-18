import FAQs from "./components/FAQS";

function FAQPage() {

    return (
        <div className="p-8 max-w-screen-xl mx-2 xl:mx-auto px-2 items-center justify-center">
          <header className='bg-component border-component border rounded-xl shadow-md shadow-dark1 p-4 lg:p-8"'>
            <h1 className="h1 accent mt-4 leading-normal ">Frequently Asked <span className='text-accent'>Questions</span></h1>
            <p className="mt-4 xl:w-10/12 p">
               {"Welcome to our FAQ section! Here, we aim to address some of the most common questions and concerns you might have about AirActive. Whether you're curious about how our real-time air quality monitoring works, or how to make the most out of your account, we've got answers."} 
            </p>
            
            </header>
            <FAQs/>
        </div>

    );
}

export default FAQPage;
