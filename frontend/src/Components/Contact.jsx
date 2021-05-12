import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <section>
        <div class=" text-black py-20 -mt-40">
          <div class="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
            <div class="flex flex-col w-full lg:w-1/3 p-8 md:mt-20">
              <p class=" text-green-600  text-4xl sm:text-3xl bold uppercase tracking-loose font-sans sm:-mt-9 mt-10">
                REVIEW
              </p>
              <p class="text-3xl md:text-4xl my-4 leading-relaxed md:leading-snug">
                Leave us a feedback!
              </p>
              <p class="text-sm md:text-base leading-snug text-black-500 text-opacity-100">
                Please provide your valuable feedback and something something
                ...
              </p>
            </div>
            <div class="flex flex-col w-full lg:w-2/3 justify-center mt-2">
              <div class="container w-full px-4">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-lg bg-white">
                      <div class="flex-auto p-5 lg:p-10">
                        <h4 class="text-2xl mb-4 text-black font-semibold">
                          Have a suggestion?
                        </h4>
                        <form id="feedbackForm" action="" method="">
                          <div class="relative w-full mb-3">
                            <label
                              class="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="email"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              class="border px-3 py-3 rounded text-sm shadow-xl w-full
                         placeholder-black text-gray-800 outline"
                              placeholder=" "
                              style={{ transition: "all 0.15s ease 0s" }}
                              required
                            />
                          </div>

                          <div class="relative w-full mb-3">
                            <label
                              class="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              class="border px-3 py-3 rounded text-sm shadow-xl w-full placeholder-black text-gray-800 outline"
                              placeholder=" "
                              style={{ transition: "all 0.15s ease 0s" }}
                              required
                            />
                          </div>

                          <div class="relative w-full mb-3">
                            <label
                              class="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="email"
                            >
                              Phone
                            </label>
                            <input
                              
                              type="email"
                              name="email"
                              id="email"
                              class="border px-3 py-3 rounded text-sm shadow-xl w-full placeholder-black text-gray-800 outline "
                              placeholder=" "
                              style={{ transition: "all 0.15s ease 0s" }}
                              required
                            />
                          </div>
                          <div class="relative w-full mb-3">
                            <label
                              class="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="message"
                            >
                              Message
                            </label>
                            <textarea
                              maxlength="300"
                              name="feedback"
                              id="feedback"
                              rows="1"
                              cols="80"
                              class="border px-3 py-3 rounded text-sm shadow-xl w-full placeholder-black text-gray-800 outline"
                              placeholder=""
                              required
                            ></textarea>
                          </div>
                          <div class="text-center mt-6">
                            <button
                              id="feedbackBtn"
                              class="bg-green-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              style={{ transition: "all 0.15s ease 0s" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
