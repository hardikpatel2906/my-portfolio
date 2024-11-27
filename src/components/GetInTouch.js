const GetInTouch = () => {
    return (
        <>
            <div className="mx-auto max-w-4xl flex justify-center">
                <form>
                    <div className="w-[300px]">
                        <label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 font-Jost">First name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-lg rounded-sm block w-full p-2.5" placeholder="Enter name" required />
                    </div>
                    <div className="w-[300px]">
                        <label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 font-Jost">Last name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-lg rounded-sm block w-full p-2.5" placeholder="Enter name" required />
                    </div>
                    <div className="w-[300px]">
                        <label for="email" class="block mb-2 text-lg font-medium text-gray-900 font-Jost">Email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-lg rounded-sm block w-full p-2.5" placeholder="Enter name" required />
                    </div>
                    <div className="w-[300px]">
                        <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 font-Jost">Phone</label>
                        <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-lg rounded-sm block w-full p-2.5" placeholder="Enter name" required />
                    </div>
                    <div className="w-[300px]">
                        <label for="message" class="block mb-2 text-lg font-medium text-gray-900 font-Jost">Message</label>
                        <textarea type="text" id="message" class="bg-gray-50 border border-gray-300 text-lg rounded-sm block w-full p-2.5" placeholder="Enter name" required />
                    </div>
                    <button className="bg-black rounded-md text-white p-5 font-Jost mt-10 text-lg" >Send Message</button>
                </form>
            </div>
        </>
    )
};
export default GetInTouch;