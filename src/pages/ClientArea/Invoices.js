function Invoices(){
    return(
        <div className="mx-5">
            <div className="flex flex-row bg-slate-800 my-2 py-3">
                <label className="mx-2 text-lg text-white">UserName: fkgdrsyk </label> 
                <label className="mx-2 text-lg text-white">Invoice NO: #104959</label> 
                <label className="mx-2 text-lg text-white">Invoice name:nVPN-extend-1 Month Dedicated</label> 
            </div>
            <div className="grid  grid-cols-3 grid-flow-row gap-4 py-4">
                <div><img className="w-40 h-30 " src="./amazonpay.png" ></img></div>
                <div><img className="w-40 h-30 " src="./paybitcoin.png"></img></div>
                <div><img className="w-40 h-30 " src="./paymentwall.png"></img></div>
                <div><img className="w-40 h-30 " src="./paypal.png"></img></div>
                <div><img className="w-40 h-30 " src="./payssion.png"></img></div>
                <div><img className="w-40 h-30 " src="./perfectmoney.png"></img></div>
                <div><img className="w-40 h-30 " src="./skrill.png"></img></div>
                <div><img className="w-40 h-30 " src="./webmoney.png"></img></div>
                <div><img className="w-40 h-30 " src="./paybitcoin.png"></img></div>

            </div>
        </div>
    );
}

export default Invoices;