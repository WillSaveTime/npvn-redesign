import React from "react";

function PreferFriend(){
    return(
        <div className="flex flex-row py-3">
            <div className="w-2/3">
                <div >
                    <p class="mb-3 font-light text-left text-gray-500 dark:text-gray-400">Here we go with our latest Feature the 'Refer a Friend' Function. For a better understanding what it is here is the explanation. Enter your friend's email and he will receive an Order link including his own unique ref number. As soon as he clicks on that link and succesfully places an Order - depending on the package he chooses - your Account will be automatically accounted after his finished Order.
                    Depending on the package Shared / Dedicated, 1,3,6 or 12 months, different time credits will be added. Afterwards you can then freely decide how and when to convert your earned time credits in your Account.
                    </p><br></br>
                    <p class="mb-3 font-light text-left text-gray-500 dark:text-gray-400">
                        Your account must be active and unexpired to do this. For now the referral conditions are as follows:
                    </p>
                    <div class="grid grid-cols-2 gap-6 grid-flow-col">
                        <div>
                            <label>Shared Ip</label><br></br>
                            <label>[#] 1 Month = 14 Days</label><br></br>
                            <label>[#] 1 Month = 14 Days</label><br></br>
                            <label>[#] 1 Month = 14 Days</label><br></br>
                            <label>[#] 1 Month = 14 Days</label><br></br>
                        </div>
                        <div>
                            <label>Dedicated Ip</label><br></br>
                            <label>[#] 1 Month = 14 Days</label><br></br>
                            <label>[#] 1 Month = 14 Days</label><br></br>
                            <label>[#] 1 Month = 14 Days</label><br></br>
                            <label>[#] 1 Month = 14 Days</label><br></br>
                        </div>
                    </div><br></br>
                    <p class="mb-3 font-light text-left text-gray-500 dark:text-gray-400">
                    Important: To prevent any misuse of the Referral System, all referred Clients, the Email + Ref no. are tracked and the Order leads back to your Account. Incase we notice any abuse of the system we will think about tightening the rules, or completely disable it.

                    </p>
                    <p class="mb-3 font-light text-left text-gray-500 dark:text-gray-400">
                    1.) Multiple Invitations to the same Person are not allowed. An invitation counts for one individual NEW Friend only.
                    </p>
                    <p class="mb-3 font-light text-left text-gray-500 dark:text-gray-400">
                    2.) Invited friends need to use their own Payment method! If you are paying for your buddy it will not count as a successful Referral (the order would still get processed instantly without delay time - but no credits will be credited to your account).
                    </p>
                    <p class="mb-3 font-light text-left text-gray-500 dark:text-gray-400">
                    3.) If under any circumstances your referred Friend causes Problems with his Payment (most likely paypal..) all consequences fall back to your account. On first occurrence the added Bonus time of your friend would be simply deducted from your account. If you reffered 2 problematic Clients who fail with payments (for example: paypal disputes) your account will be entirely terminated!
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-flow-row items-centerpy-1">
                    <div className="w-full mx-5">
                        <div className="w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                Latest Customers
                                </h5>
                            </div>
                            <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                        className="w-8 h-8 rounded-full"
                                        src="/slagon1.png"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Michael Gough
                                        </p>
                                    </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                        className="w-8 h-8 rounded-full"
                                        src="/slagon2.png"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Lana Byrd
                                        </p>
                                    </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                        className="w-8 h-8 rounded-full"
                                        src="slagon3.png"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Thomes Lean
                                        </p>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                    </div>
                    <div className="w-full mx-5">
                        <div className="w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                Latest Customers
                                </h5>
                            </div>
                            <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                        className="w-8 h-8 rounded-full"
                                        src="/slagon4.png"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Michael Gough
                                        </p>
                                    </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                        className="w-8 h-8 rounded-full"
                                        src="/slagon5.png"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Lana Byrd
                                        </p>
                                    </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                        className="w-8 h-8 rounded-full"
                                        src="/slagon6.png"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Thomes Lean
                                        </p>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                    </div>
                    <div className="mx-5 items-center">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add New
                    </span>
                    </button>

                    </div>
            </div>
        </div>
    );
}


export default PreferFriend;