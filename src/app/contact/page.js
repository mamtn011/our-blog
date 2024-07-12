import Banner from "@/components/shared/Banner";
const ContactPage = () => {
  return (
    <div>
      <Banner pageName="Contact" />
      {/* contact info  */}
      <div className="max-w-7xl my-12 px-4 mx-auto">
        <div class="text-center py-12 px-4">
          <h2 class="text-2xl font-bold text-gray-700">Get In Touch</h2>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are here to help you. Reach out to us via any of the following
            methods.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
            <div class="p-4 shadow-lg rounded-lg bg-gray-300 hover:bg-orange-500  transition-colors">
              <h3 class="text-xl font-bold text-gray-700">Call Us</h3>
              <p class="text-gray-600 mt-2">+88 0170 0112 233</p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-gray-300 hover:bg-orange-500  transition-colors">
              <h3 class="text-xl font-bold text-gray-700">Email Us</h3>
              <p class="text-gray-600 mt-2">contact@myblog.com</p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-gray-300 hover:bg-orange-500 transition-colors">
              <h3 class="text-xl font-bold text-gray-700">Visit Us</h3>
              <p class="text-gray-700 mt-2">1230 Uttara, Dhaka North</p>
            </div>
          </div>
        </div>
      </div>
      {/* send message  */}
      <div class="bg-gray-100 py-12 px-4">
        <h2 class="text-2xl font-bold text-center text-gray-700">
          Send Us A Message
        </h2>
        <form class="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" class="block text-gray-600 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
            />
          </div>
          <div>
            <label htmlFor="email" class="block text-gray-600 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
            />
          </div>
          <div>
            <label htmlFor="message" class="block text-gray-600 font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-gray-300 border-2 border-white text-gray-900 py-3 rounded-lg shadow-lg hover:bg-orange-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
