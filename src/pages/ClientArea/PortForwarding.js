function PortForwarding(){
    return (
        <div className="flex flex-col">
            <div>
                <div className="flex mx-20 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg" role="alert" >
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Ensure that these requirements are met:</span>
                        <ul className="mt-1.5 ml-4 text-blue-700 list-disc list-inside">
                        <li>At least 10 characters (and up to 100 characters)</li>
                        <li>At least one lowercase character</li>
                        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            <div className="mx-20 overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">Port</th>
                        <th scope="col" className="py-3 px-6"> Protocol </th>
                        <th scope="col" className="py-3 px-6"> Remove </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            <label
                                htmlFor="email-address-icon"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Port Number
                            </label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                </div>
                                <input
                                type="text"
                                id="email-address-icon"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter port number"
                                />
                            </div>
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        Both (UDP and TCP)
                        </td>
                        <td className="py-4 px-6">
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Add my Port</a>
                        </td>
                    </tr>
                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Imac 27"</td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">$2499</td>
                        <td className="py-4 px-6">
                        <a  href="#"  className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Iphone 12</td> 
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">$999</td>
                        <td className="py-4 px-6">
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr> */}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
    );
}

export default PortForwarding;