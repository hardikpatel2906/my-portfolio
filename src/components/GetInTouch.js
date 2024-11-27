const GetInTouch = () => {
    return (
        <>
            <div className="mx-auto max-w-4xl mt-6">
                <h1 className="font-Jost text-5xl text-center">Contact me</h1>
                <div className="flex justify-center mt-8">
                    <form>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div className="w-[300px]">
                                <label for="full_name" class="block mb-2 text-lg font-medium text-gray-900 font-Jost">Full name</label>
                                <input type="text" id="full_name" class="bg-gray-50 border border-gray-300 text-lg rounded-sm block w-full p-2.5" placeholder="Enter name" required />
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
                                <label for="subject" class="block mb-2 text-lg font-medium text-gray-900 font-Jost">Subject</label>
                                <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-lg rounded-sm block w-full p-2.5" placeholder="Enter name" required />
                            </div>
                        </div>
                        <div className="w-[300px]">
                            <label for="message" class="block mb-2 text-lg font-medium text-gray-900 font-Jost">Message</label>
                            <textarea type="text" id="message" class="bg-gray-50 border border-gray-300 text-lg rounded-sm block w-full p-2.5" placeholder="Enter name" required />
                        </div>
                        <button className="bg-black rounded-md text-white p-5 font-Jost mt-10 text-lg" >Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
};
export default GetInTouch;