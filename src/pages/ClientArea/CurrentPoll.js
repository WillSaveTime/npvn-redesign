import React from "react";

function CurrentPull(){
    return(
        <div className="grid grid-cols-2 grid-flow-row gap-4">
            <div id="alert-additional-content-1" className="gap-1 p-4 mb-4 border border-blue-300 rounded-lg bg-blue-50 dark:bg-blue-300" role="alert">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium text-blue-900">This is a info alert</h3>
                </div>
                <div className="mt-2 mb-4 text-sm text-blue-900">
                </div>
                <div className="flex">
                    <div className="flex items-center mr-4">
                        <input id="inline-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline 1</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="inline-2-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline 2 </label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input defaultChecked="" id="inline-checked-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline checked </label>
                    </div>
                    <div className="flex items-center">
                        <input disabled="" id="inline-disabled-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-disabled-radio" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500" > Africea </label>
                    </div>
                    <div className="flex items-center">
                        <button type="button" className="w-20 ml-8 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-1.5 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900" >
                            <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg> Vote
                        </button>
                    </div>
                </div>    
            </div>
            <div id="alert-additional-content-1" className="gap-1 p-4 mb-4 border border-blue-300 rounded-lg bg-blue-50 dark:bg-blue-300" role="alert">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium text-blue-900">This is a info alert</h3>
                </div>
                <div className="mt-2 mb-4 text-sm text-blue-900">
                </div>
                <div className="flex">
                    <div className="flex items-center mr-4">
                        <input id="inline-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline 1</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="inline-2-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline 2 </label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input defaultChecked="" id="inline-checked-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline checked </label>
                    </div>
                    <div className="flex items-center">
                        <input disabled="" id="inline-disabled-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-disabled-radio" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500" > Africea </label>
                    </div>
                    <div className="flex items-center">
                        <button type="button" className="w-20 ml-8 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-1.5 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900" >
                            <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg> Vote
                        </button>
                    </div>
                </div>
                   
            </div>

            <div id="alert-additional-content-1" className="gap-1 p-4 mb-4 border border-blue-300 rounded-lg bg-blue-50 dark:bg-blue-300" role="alert">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium text-blue-900">This is a info alert</h3>
                </div>
                <div className="mt-2 mb-4 text-sm text-blue-900">
                </div>
                <div className="flex">
                    <div className="flex items-center mr-4">
                        <input id="inline-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline 1</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="inline-2-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline 2 </label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input defaultChecked="" id="inline-checked-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline checked </label>
                    </div>
                    <div className="flex items-center">
                        <input disabled="" id="inline-disabled-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-disabled-radio" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500" > Africea </label>
                    </div>
                    <div className="flex items-center">
                        <button type="button" className="w-20 ml-8 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-1.5 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900" >
                            <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg> Vote
                        </button>
                    </div>
                </div>    
            </div>

            <div id="alert-additional-content-1" className="gap-1 p-4 mb-4 border border-blue-300 rounded-lg bg-blue-50 dark:bg-blue-300" role="alert">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium text-blue-900">This is a info alert</h3>
                </div>
                <div className="mt-2 mb-4 text-sm text-blue-900">
                </div>
                <div className="flex">
                    <div className="flex items-center mr-4">
                        <input id="inline-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline 1</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="inline-2-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline 2 </label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input defaultChecked="" id="inline-checked-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Inline checked </label>
                    </div>
                    <div className="flex items-center">
                        <input disabled="" id="inline-disabled-radio" type="radio" defaultValue="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-disabled-radio" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500" > Africea </label>
                    </div>
                    <div className="flex items-center">
                        <button type="button" className="w-20 ml-8 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-1.5 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900" >
                            <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg> Vote
                        </button>
                    </div>
                </div>    
            </div>

            
    </div>
    );
}

export default CurrentPull;