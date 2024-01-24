import Image from "next/image";
import { FaLaptopCode, FaPencilAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="">
      <header className="text-center max-w-screen-2xl 2xl:mx-auto bg-green-700 rounded-2xl mx-4 px-4 text-stone-50 flex flex-col justify-center p-4 lg:p-8 items-center min-h-[56vh] lg:min-h-[76vh] 2xl:min-h-[50vh]">
        <h1 className="h3 text-stone-50">
          About Eco<span className="">Breathe</span>
        </h1>
        <h2 className="h1 mt-4 lg:mt-8">Empowering Sustainable Living.</h2>
      </header>

      <div className="page">
        <section className="pt-14 lg:pt-28 text-center">
          <article className="max-w-screen-lg lg:px-10 mx-auto">
            <h3 className="h1 text-stone-700 font-semibold my-8 lg:my-16 tracking-tight">
              How it started.
            </h3>
            <div className="flex flex-row">
              <div className="flex-1">
                <p className="p">
                  <strong>
                    Eco<span className="">Breathe</span>
                  </strong>{" "}
                  was founded by{" "}
                  <a
                    href="https://example.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline hover:opacity-80 duration-300"
                  >
                    Casey James
                  </a>{" "}
                  to heighten awareness about the pivotal role of Air Quality
                  and its impact on our Planet.
                </p>
              </div>
              <div className="">
                <Image
                  src="/CJ.png"
                  alt="Casey"
                  className="ml-4 rounded-full"
                  width={92}
                  height={92}
                />
                <span className="rounded-2xl ml-16 text-sm  font-thin px-4 py-2 bg-green-600 -mt-2 text-stone-50">
                  Casey
                </span>
              </div>
            </div>
            <p className="p pt-4">
              <strong>EcoBreathe</strong> was conceived to be the go-to place
              for information on Air Quality, empowering users worldwide and
              fostering an open-source, collaborative community.
            </p>
            <p className="p pt-8">
              {" "}
              We aim to provide our users with the latest about air quality
              trends and related insights, ensuring they stay knowledgeable and
              proactive in promoting cleaner and healthier environments.
            </p>
          </article>

          <article className="pt-14 lg:pt-28  grid-layout">
            <div className="bg-green-700 z-10 p-16 lg:p-32 rounded-2xl">
              <h3 className=" lg:w-1/2 mx-auto  p-1 text-lg bg-stone-50 text-green-700 rounded-2xl ">
                Our Mission
              </h3>
              <p className=" h4 tracking-wide mt-8 font-extralight text-white">
                <q className="">
                  To be a leading force in global advocacy for improving Air
                  Quality.
                </q>
              </p>
            </div>

            <div className="bg-brown-900 p-16 lg:p-32 rounded-2xl">
              <h3 className="lg:w-1/2 p-1 text-lg mx-auto bg-stone-100 text-brown-900 rounded-2xl ">
                Our Vision
              </h3>
              <p className="h4 mt-8 tracking-wide font-light mx-auto text-white">
                <q>
                  Envisioning a future where clean and breathable air is a
                  fundamental right
                </q>
              </p>
            </div>
          </article>

          <article className="pt-14 lg:pt-28 ">
            <h3 className="h1 font-semibold text-stone-700 my-8 lg:my-16 tracking-tight">
              Get Involved:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-start">
              <div className="bg-lime-200 z-10 p-6 lg:p-12 rounded-2xl space-y-4">
                <i className="h2 text-lime-600">
                  <FaLaptopCode />
                </i>
                <h3 className="h4 text-stone-900">Technical Contributors</h3>
                <p className="p mt-8 font-thin text-stone-900">
                  Check our{" "}
                  <a
                    className="text-lime-700 hover:underline duration-300"
                    href="https://github.com/your-organization"
                  >
                    GitHub Repo
                  </a>{" "}
                  to contribute your technical skills and help advance our
                  mission for cleaner air and more sustainable future.
                </p>
              </div>

              <div className="bg-brown-100 z-10 p-6 lg:p-12 rounded-2xl space-y-4">
                <i className="text-4xl text-brown-600">
                  <FaPencilAlt />
                </i>
                <h3 className="h4 text-stone-900">Blog Writers</h3>
                <p className="p mt-8 font-thin text-stone-900">
                  Contribute to our blog with your writing skills and passion
                  for environmental issues. Share insights on clean air,
                  sustainability, and eco-friendly practices to inspire a wider
                  audience.
                </p>
              </div>

              <div className="bg-green-200 z-10 p-6 lg:p-12 rounded-2xl space-y-4">
                <i className="text-4xl text-green-600 mb-4">
                  <FaEnvelope />
                </i>
                <h3 className="h4 lg:w-1/2 text-stone-900">Contact Us</h3>
                <p className="p mt-8 font-thin text-stone-900">
                  For involvement or inquiries, contact us at
                  <a
                    className="text-green-600 hover:underline duration-300"
                    href="mailto:info@ecobreathe.org"
                  >
                    {" "}
                    ecobreathe@gmail.com
                  </a>
                  . We welcome individuals eager to make a difference in
                  environmental sustainability.
                </p>
              </div>
            </div>
          </article>

          <article className="py-20 lg:py-40 grid-layout">
            <div className="text-start my-auto">
              <h3 className="h1 text-stone-700 mb-8 font-semibold tracking-tighter">
                Get Started Today!
              </h3>
              <p className="p ">
                With EcoBreathe, you're not just monitoring the air.
              </p>
              <p className="p mb-4">
                {" "}
                You're taking a stand for your health, for clarity, and for the
                only planet we call home. Join us, and be the change you want to
                breathe.{" "}
              </p>
              <a href="/signup">
                <button className="button-style">Sign up!</button>
              </a>
            </div>
            <div className="rounded-2xl mt-4 md:mt-0 p-6 lg:p-12">
              <p className="h1 text-green-600 -mb-4 text-start mr-auto rounded-full">
                "
              </p>
              <p className="p mb-8 -mt-8 ">
                Water and air, the two essential fluids on which all life
                depends, have become{" "}
                <strong className="text-stone-600">global garbage cans.</strong>
              </p>

              <p className="font-semibold h4 text-green-700">
                {" "}
                Jacques Yves Cousteau
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};
export default About;
