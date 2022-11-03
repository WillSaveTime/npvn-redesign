function ServerSwitch(){
    return(
    <div>
        <div id="alert-additional-content-4" class="p-4 mb-4 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-yellow-200" role="alert">
  <div class="flex items-center">
    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Info</span>
    <h3 class="text-lg font-medium text-yellow-700 dark:text-yellow-800">Explanation:</h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
  Unless otherwise stated, after a Switch there is no download of new Config files required. Simply give the DNS time to propagate and Update properly on your side, which takes anything around a maximum of 1-5 Minutes. The DNS will be updated during that timeframe and the Validation will allow you to connect to the new IP/Country!
  </div>
  <div class="flex">
    <button type="button" class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">
      <svg aria-hidden="true" class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      View more
    </button>
    <button type="button" class="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
      Dismiss
    </button>
  </div>
</div>


<div id="alert-additional-content-2" class="p-4 mb-4 border border-red-300 rounded-lg bg-red-50 dark:bg-red-200" role="alert">
  <div class="flex items-center">
    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-red-900 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Info</span>
    <h3 class="text-lg font-medium text-red-900 dark:text-red-800">You have NO Free Switches left!</h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-red-900 dark:text-red-800">
  The Location Switch Feature available for 10$/ Month allows you to switch to your preferred VPN Country Worldwide at any given time. This process is fully automaticated and Instant.
  <br></br>IMPORTANT NOTE: This Feature is fully optional - if at anytime you decide you dont need it any longer - the Feature will disable itself without any further interaction required. No reminders, or new invoices will be generated, unless you decide to.

There are no risks attached to it, so why not try it out...
  </div>
  <div class="flex flex-col">
    <div>
        <label className="text-blue-600 text-2xl">Revert my changes:   </label>
        <button type="button" class="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900">
        <svg aria-hidden="true" class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
        No, just revert my changes
        </button><br></br>
    </div><br></br>
    <div class="flex flex-row">
    <label className="text-blue-600 text-2xl">Revert my changes:</label>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
    </select>
    <button type="button" class="text-red-900 bg-transparent border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
      Yes, I want UNLIMITED Switches
    </button>
    </div>
  </div>
</div>

</div>
    );
}

export default ServerSwitch;