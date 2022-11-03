import React from "react";

function RenewAccount(){
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-row"><label className="text-radio text-black-100">Plan:Dedicated IP</label></div>
            <div className="flex flex-col flex-wrap items-center">
                <div className="flex items-center mr-4 pb-2">
                    <label
                    htmlFor="red-radio"
                    className="ml-2 text-radio font-medium text-gray-900 dark:text-gray-300"
                    >
                    Renew for:
                    </label>
                </div>
                <div className="flex items-center mr-4 pb-2 float-right">
                <label
                    htmlFor="red-radio"
                    className="ml-2 text-radio font-medium text-gray-900 dark:text-gray-300"
                    >
                    1 Month (8$) 
                    </label>
                    <input
                    id="red-radio"
                    type="radio"
                    defaultValue=""
                    name="colored-radio"
                    className="w-8 h-8 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    
                </div>
                <div className="flex items-center mr-4 pb-2">
                <label
                    htmlFor="green-radio"
                    className="ml-2 text-radio font-medium text-gray-900 dark:text-gray-300"
                    >
                    3 Months (20$)  *-16.67% Discount
                    </label>
                    <input
                    id="green-radio"
                    type="radio"
                    defaultValue=""
                    name="colored-radio"
                    className="w-8 h-8 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    
                </div>
                <div className="flex items-center mr-4 pb-2">
                <label
                    htmlFor="purple-radio"
                    className="ml-2 text-radio font-medium text-gray-900 dark:text-gray-300"
                    >
                    6 Months (30$)  *-16.67% Discount
                    </label>
                    <input
                    defaultChecked=""
                    id="purple-radio"
                    type="radio"
                    defaultValue=""
                    name="colored-radio"
                    className="w-8 h-8 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    
                </div>
                <div className="flex items-center mr-4 pb-2">
                <label
                    htmlFor="teal-radio"
                    className="ml-2 text-radio font-medium text-gray-900 dark:text-gray-300"
                    >
                    12 Months (60$)  *-16.67% Discount
                    </label>
                    <input
                    id="teal-radio"
                    type="radio"
                    defaultValue=""
                    name="colored-radio"
                    className="w-8 h-8 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    
                </div>
                <div className="flex items-center mr-4">
                <button type="button" class="mt-5 w-200 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>                  
                </div>
            </div>
    </div>
    );
}

export default RenewAccount;