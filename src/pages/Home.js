
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import item from '../assets/images/item.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Home() {
  return (
    <>
      <div id="header0" class="header0">
        <div class="bg-header mx-auto mt-1 text-xl text-[#372580]">
          <div class="flex mx-auto justify-between items-start">
            <div id="header-text-left" class=" max-w-lg flex-[0.4]">
              <h1>We protect YOUR privacy</h1>
              <p>No Contract</p>
              <p>No Hidden Fee</p>
              <p>Free Setup</p>
              <div>
                <button>Get Start Now | only $6.00 / mo</button>
              </div>
            </div>
            <div class="header-text-right  flex flex-[0.6] mt-24 justify-end bg-[#21E9D8] bg-opacity-[0.1] rounded-r-2xl rounded-b-2xl">
              <img src={item} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto mt-24 gap-8 justify-center " data-aos="fade-down">
        <div class="bg-white rounded-xl py-5 px-3  text-gray-900 why-section">
          <div class="text-2xl text-purple-800 font-bold">Sunday, 02.10.2011</div>
          <div class="text-lg mt-5">
            As you can see we have tweaked our layout here and there. Going along with this a new Ticket and
            a huge <a href="https://support.nvpn.net/Knowledgebase/List">Knowledgebase</a> System has been
            integrated. <br />
            Incase of any Problems or General Questions always take a first look into the Knowledgase that
            becomes frequently updated.
          </div>
        </div>
        <div class="bg-white rounded-xl py-5 px-3  text-gray-900 why-section">
          <div class="text-2xl text-purple-800 font-bold mt-5">Friday, 04.03.2011</div>
          <div class="text-lg mt-5">
            The USA Server has also been updated to a more stable, faster Server. All USA Costumers <a
              href="https://nvpn.net/memberss/">download</a> your new Config file in order to connect.
          </div>
        </div>
        <div class="bg-white rounded-xl py-5 px-3  text-gray-900 why-section">
          <div class="text-2xl text-purple-800 font-bold mt-5">Tuesday, 01.03.2011</div>
          <div class="text-lg mt-5">
            To optimize the performance the Russia <span class="one2">Server has been updated and replaced.
              All RU Costumers must <a href="https://nvpn.net/memberss/">download</a> your new Config file in
              order to connect.</span>
          </div>
        </div>
      </div>

      <div class=" mx-auto mt-24" data-aos="fade-down">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={true}
          renderButtonGroupOutside={true}
        >
          <div class="srv-sl container my-12" srvsl-timer="5">

            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-show flex">

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.2704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    <h4>Alex Hoyt</h4>
                    <b>15/10/2021</b>
                    <p>Great for deploying a remote office. The configurations are more than enough for a small business and the uptime is stable. I never expected to find that kind of hardware for prices as low as this.</p>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.2704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <h4>Benjamin S.</h4>
                    <b>20/10/2021</b>
                    <p>I work in software development and I’ve been using Serverhino’s VPS to test various crossplatform apps. The VM templates make the entire process much quicker.</p>
                  </div>
                </div>
              </div>

            </div>


            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-hide">

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-female</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-female" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M60.150701,23.8204849 C65.1603059,23.8204849 70.1699108,25.7315847 73.9921105,29.5537844 L73.9921105,29.5537844 L74.8003614,30.3620353 C79.3741852,34.9358591 80.0427112,40.8160266 80.5658049,46.8166997 L80.5658049,46.8166997 L80.6483385,47.7784929 L80.7306039,48.7433178 C81.015952,52.0585273 81.3543604,55.384922 82.2666013,58.560212 L82.2666013,58.560212 L74.2790699,58.560212 C70.4226455,62.5776739 65.2866733,64.5864048 60.150701,64.5864048 C55.0147287,64.5864048 49.8787565,62.5776739 46.0223321,58.560212 L46.0223321,58.560212 L38.1552968,58.560212 C39.2749725,55.0235633 39.6350989,51.4496173 39.9103562,47.9601945 L39.9103562,47.9601945 L39.9847485,47.0012598 C40.4581044,40.8417339 40.8278688,35.0352071 45.5010406,30.3620353 L45.5010406,30.3620353 L46.3092915,29.5537844 C50.1314912,25.7315847 55.1410961,23.8204849 60.150701,23.8204849 Z" id="Rectangle" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M99.0573023,86.6627443 C89.6375604,75.6459122 75.6373086,68.6627443 60.0060505,68.6627443 C44.4145242,68.6627443 30.4457232,75.6104575 21.0267171,86.5788145" id="Path" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M78.5420097,90.1627443 C75.5706558,76.1353412 62.0653915,77.2280612 60.0249588,72.1627443 C57.9376945,77.3147502 43.9770088,76.1353412 41.5420097,90.0788145" id="Path-Copy-2" transform="translate(60.042010, 81.162744) scale(1, -1) translate(-60.042010, -81.162744) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    <h4>Lana Hansen</h4>
                    <b>03/11/2021</b>
                    <p>This is probably the cheapest VPS that can handle our company’s ERP. Backups are a must for accounting data so it was great to see that they’re included in the package.</p>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.2704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <h4>Dave509</h4>
                    <b>13/11/2021</b>
                    <p>finally, an actual low-cost provider that doesn’t charge for support and responds quickly. it’s pretty annoying when you have an urgent issue and you cant get help until another day because you didn’t pay a ridiculous price for the ultra premium support package. tech support should be available to everyone by default and I’m glad the guys at Serverhino get it.</p>
                  </div>
                </div>
              </div>

            </div>

            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-hide">

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.2704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    <h4>Jonas Hirsch</h4>
                    <b>05/01/2022</b>
                    <p>My Rust server runs on V-Quattro and it’s the smoothest experience I’ve had so far with VPS providers. No lag, no downtime. The free DDoS protection came in handy once after I banned a very toxic player. The guy’s still banned and the server is still up and running.</p>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-female</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-female" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M60.150701,23.8204849 C65.1603059,23.8204849 70.1699108,25.7315847 73.9921105,29.5537844 L73.9921105,29.5537844 L74.8003614,30.3620353 C79.3741852,34.9358591 80.0427112,40.8160266 80.5658049,46.8166997 L80.5658049,46.8166997 L80.6483385,47.7784929 L80.7306039,48.7433178 C81.015952,52.0585273 81.3543604,55.384922 82.2666013,58.560212 L82.2666013,58.560212 L74.2790699,58.560212 C70.4226455,62.5776739 65.2866733,64.5864048 60.150701,64.5864048 C55.0147287,64.5864048 49.8787565,62.5776739 46.0223321,58.560212 L46.0223321,58.560212 L38.1552968,58.560212 C39.2749725,55.0235633 39.6350989,51.4496173 39.9103562,47.9601945 L39.9103562,47.9601945 L39.9847485,47.0012598 C40.4581044,40.8417339 40.8278688,35.0352071 45.5010406,30.3620353 L45.5010406,30.3620353 L46.3092915,29.5537844 C50.1314912,25.7315847 55.1410961,23.8204849 60.150701,23.8204849 Z" id="Rectangle" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M99.0573023,86.6627443 C89.6375604,75.6459122 75.6373086,68.6627443 60.0060505,68.6627443 C44.4145242,68.6627443 30.4457232,75.6104575 21.0267171,86.5788145" id="Path" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M78.5420097,90.1627443 C75.5706558,76.1353412 62.0653915,77.2280612 60.0249588,72.1627443 C57.9376945,77.3147502 43.9770088,76.1353412 41.5420097,90.0788145" id="Path-Copy-2" transform="translate(60.042010, 81.162744) scale(1, -1) translate(-60.042010, -81.162744) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <h4>Diana Borge</h4>
                    <b>18/12/2021</b>
                    <p>Of all the virtual servers I’ve used for my online store, this is one of the cheapest and the most reliable. The support is very responsive as well, all questions get answered quickly.</p>
                  </div>
                </div>
              </div>

            </div>


            {/* <div class="srv-sl-switcher-left">
              <div class="srv-sl-arrow inactive"></div>
            </div>
            <div class="srv-sl-switcher-right">
              <div class="srv-sl-arrow active"></div>
            </div>

            <div class="srv-sl-bullets d-flex flex-wrap justify-content-center"><div class="srv-sl-bullet active"></div><div class="srv-sl-bullet inactive"></div><div class="srv-sl-bullet inactive"></div></div> */}

          </div>
          <div class="srv-sl container  my-12" srvsl-timer="5">

            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-show flex">

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.2704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    <h4>Alex Hoyt</h4>
                    <b>15/10/2021</b>
                    <p>Great for deploying a remote office. The configurations are more than enough for a small business and the uptime is stable. I never expected to find that kind of hardware for prices as low as this.</p>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.2704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <h4>Benjamin S.</h4>
                    <b>20/10/2021</b>
                    <p>I work in software development and I’ve been using Serverhino’s VPS to test various crossplatform apps. The VM templates make the entire process much quicker.</p>
                  </div>
                </div>
              </div>

            </div>


            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-hide">

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-female</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-female" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M60.150701,23.8204849 C65.1603059,23.8204849 70.1699108,25.7315847 73.9921105,29.5537844 L73.9921105,29.5537844 L74.8003614,30.3620353 C79.3741852,34.9358591 80.0427112,40.8160266 80.5658049,46.8166997 L80.5658049,46.8166997 L80.6483385,47.7784929 L80.7306039,48.7433178 C81.015952,52.0585273 81.3543604,55.384922 82.2666013,58.560212 L82.2666013,58.560212 L74.2790699,58.560212 C70.4226455,62.5776739 65.2866733,64.5864048 60.150701,64.5864048 C55.0147287,64.5864048 49.8787565,62.5776739 46.0223321,58.560212 L46.0223321,58.560212 L38.1552968,58.560212 C39.2749725,55.0235633 39.6350989,51.4496173 39.9103562,47.9601945 L39.9103562,47.9601945 L39.9847485,47.0012598 C40.4581044,40.8417339 40.8278688,35.0352071 45.5010406,30.3620353 L45.5010406,30.3620353 L46.3092915,29.5537844 C50.1314912,25.7315847 55.1410961,23.8204849 60.150701,23.8204849 Z" id="Rectangle" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M99.0573023,86.6627443 C89.6375604,75.6459122 75.6373086,68.6627443 60.0060505,68.6627443 C44.4145242,68.6627443 30.4457232,75.6104575 21.0267171,86.5788145" id="Path" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M78.5420097,90.1627443 C75.5706558,76.1353412 62.0653915,77.2280612 60.0249588,72.1627443 C57.9376945,77.3147502 43.9770088,76.1353412 41.5420097,90.0788145" id="Path-Copy-2" transform="translate(60.042010, 81.162744) scale(1, -1) translate(-60.042010, -81.162744) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    <h4>Lana Hansen</h4>
                    <b>03/11/2021</b>
                    <p>This is probably the cheapest VPS that can handle our company’s ERP. Backups are a must for accounting data so it was great to see that they’re included in the package.</p>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.2704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <h4>Dave509</h4>
                    <b>13/11/2021</b>
                    <p>finally, an actual low-cost provider that doesn’t charge for support and responds quickly. it’s pretty annoying when you have an urgent issue and you cant get help until another day because you didn’t pay a ridiculous price for the ultra premium support package. tech support should be available to everyone by default and I’m glad the guys at Serverhino get it.</p>
                  </div>
                </div>
              </div>

            </div>

            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-hide">

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.2704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    <h4>Jonas Hirsch</h4>
                    <b>05/01/2022</b>
                    <p>My Rust server runs on V-Quattro and it’s the smoothest experience I’ve had so far with VPS providers. No lag, no downtime. The free DDoS protection came in handy once after I banned a very toxic player. The guy’s still banned and the server is still up and running.</p>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-female</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-female" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M60.150701,23.8204849 C65.1603059,23.8204849 70.1699108,25.7315847 73.9921105,29.5537844 L73.9921105,29.5537844 L74.8003614,30.3620353 C79.3741852,34.9358591 80.0427112,40.8160266 80.5658049,46.8166997 L80.5658049,46.8166997 L80.6483385,47.7784929 L80.7306039,48.7433178 C81.015952,52.0585273 81.3543604,55.384922 82.2666013,58.560212 L82.2666013,58.560212 L74.2790699,58.560212 C70.4226455,62.5776739 65.2866733,64.5864048 60.150701,64.5864048 C55.0147287,64.5864048 49.8787565,62.5776739 46.0223321,58.560212 L46.0223321,58.560212 L38.1552968,58.560212 C39.2749725,55.0235633 39.6350989,51.4496173 39.9103562,47.9601945 L39.9103562,47.9601945 L39.9847485,47.0012598 C40.4581044,40.8417339 40.8278688,35.0352071 45.5010406,30.3620353 L45.5010406,30.3620353 L46.3092915,29.5537844 C50.1314912,25.7315847 55.1410961,23.8204849 60.150701,23.8204849 Z" id="Rectangle" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M99.0573023,86.6627443 C89.6375604,75.6459122 75.6373086,68.6627443 60.0060505,68.6627443 C44.4145242,68.6627443 30.4457232,75.6104575 21.0267171,86.5788145" id="Path" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M78.5420097,90.1627443 C75.5706558,76.1353412 62.0653915,77.2280612 60.0249588,72.1627443 C57.9376945,77.3147502 43.9770088,76.1353412 41.5420097,90.0788145" id="Path-Copy-2" transform="translate(60.042010, 81.162744) scale(1, -1) translate(-60.042010, -81.162744) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <h4>Diana Borge</h4>
                    <b>18/12/2021</b>
                    <p>Of all the virtual servers I’ve used for my online store, this is one of the cheapest and the most reliable. The support is very responsive as well, all questions get answered quickly.</p>
                  </div>
                </div>
              </div>

            </div>


            {/* <div class="srv-sl-switcher-left">
              <div class="srv-sl-arrow inactive"></div>
            </div>
            <div class="srv-sl-switcher-right">
              <div class="srv-sl-arrow active"></div>
            </div>

            <div class="srv-sl-bullets d-flex flex-wrap justify-content-center"><div class="srv-sl-bullet active"></div><div class="srv-sl-bullet inactive"></div><div class="srv-sl-bullet inactive"></div></div> */}

          </div>

        </Carousel>

      </div>
      <div class="bg-white rounded-xl py-5 px-3  text-gray-900 why-section container  mx-auto mt-24 " data-aos="fade-up">
        <div class="text-2xl text-purple-800 font-bold"><h2>What is www.nVpn.net ?</h2></div>
        <div class="text-lg mt-5">
          <p class="what_is_nvpn">- www.nVpn.net -<strong> </strong>provides a <strong>secure</strong> and
            <strong>private</strong> <strong>connection</strong> within a public network (e.g. the Internet). This
            connection is obtained through a method, called tunneling, where the data to be transferred is broken up into
            smaller 'packets' encrypted and are subsequently sent through the virtual tunnel created. The connection gets
            established via the Open Source Software<em> <strong>OpenVPN</strong></em> (or L2TP/IPsec(IKEv1/IKEv2), Squid
            &amp; Socks5 proxy). We provide by default <strong>a secure 256 Bit AES-CBC </strong> encrypted connection to
            our servers located all over the world where <strong>all</strong> traffic is directed through them! PLEASE
            NOTE: that if you do choose to use one of many free proxy services there is a great chance that your credit
            card and/or passwords will be subject to fraud because they log your activity!<br />
            <br />
            With nVpn.net you can anonymize and <strong>encrypt</strong> your <strong>entire</strong> Internet activities.
            Regardless, whether you like to simply browse, keep a blog, write e-mails / ftp, run a business, transfer
            money, download images, exchange files or chat, you will <strong>always</strong> be unobserved and safe.
          </p>
          <h2 class="h2_index_description"> What other...
            <br />
          </h2>

          <div class="box_content_r">
            <div class="box_content_t">
              <div class="box_content_b">
                <div class="box_content">
                  <h2>Benefits of using our nVpn service:</h2>
                  <p><strong style={{ color: "#787776" }}>[+]</strong> Provides an extra layer of safety and anonymity by hiding
                    your real IP address <br />
                    <strong style={{ color: "#787776" }}>[+]</strong> Use Skype, Yahoo and Google Talk in Middle East and Asia.
                    Visit censored/blocked websites in Iran, Qatar, China, Turkey and many more<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> Securely encrypted connection between your PC and the
                    Internet (<strong>256 Bit AES-CBC / SHA512</strong> as default and alternatively 128 Bit Blowfish-CBC
                    / SHA1)<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> Your ISP/office/school CANNOT monitor your activities <br />
                    <strong style={{ color: "#787776" }}>[+]</strong> We offer <strong>Shared IP</strong> or <strong>Dedicated
                      IP</strong> (*even <strong>Dynamic IPs</strong> as Upgrade possibility*)<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Unmetered bandwidth</strong> and
                    <strong>NO</strong> Speed throttling<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Portforward</strong> - open the ports of your
                    desire in our client area, ports are then opened instantly &amp; automatically <strong>without any
                      delay!</strong> (No more need to Portforward in your router.)<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Anti Port-Clash function:</strong> Even on Shared
                    IPs your chosen port(s) - and by that your assets - are safe. Two members can <strong>never
                      clash</strong> on the same port(s) at the same time<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>TCP/443</strong> Mode can be chosen from inside the
                    Members Area. Allows to bypass almost all University/Workplace/School Firewall restrictions (good for
                    places where OpenVPN's default UDP/1194 port is blocked) <br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Server Switch</strong> possibility in Members Area
                    - (1x FREE of charge) - change to 56 Countries (including 5181 IPs) in <strong>seconds</strong>, fully
                    automatic <strong>without any</strong> delay.<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> Instant setup and delivery to your mailbox, <strong>no need
                      to wait</strong>, pay and go, like in McDonalds drive by :)<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Server Emergency function</strong>: Incase a Server
                    downtime occurs (a rare event) the affected Members receive a free Switch slot to another alternative
                    Country, as always <strong>fully automaticated</strong>. By this method: an <strong>alltime
                      100%</strong> Access is guaranteed. You will always be able to access another alternative Country,
                    incase the original Country is undergoing a downtime <strong>for more than 30-45 minutes.<br /></strong>
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>L2TP/IPsec</strong>(<strong>IKEv1</strong> and
                    <strong>IKEv2</strong>): Every subscription plan includes the L2TP/IPsec protocol in
                    <strong>BOTH</strong> variants as <strong>IKEv1</strong> or <strong>IKEv2</strong><br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Squid and SOCKS5 Proxy*<em>New</em></strong>*:
                    Every subscription plan includes a Squid and a SOCKS5 proxy. More info what a Squid and a SOCKS5 proxy
                    is can be found in the knowledgebase.
                    Both Proxies are setup in a way to support SSL Encryption in combination with "<em>stunnel</em>"
                    making it an <strong>encrypted Proxy</strong><br />
                    <strong style={{ color: "#787776" }}>[+]</strong><strong> Anti DPI</strong> (Deep Packet Inspection):
                    Additional measurements to bypass DPI (for countries like China and its great firewall, Iran..) have
                    been setup using <strong>OpenVPN over SSL</strong> mode and/or with <strong>tls-crypt</strong> or via
                    <strong>Obfsproxy</strong><br />
                    <strong style={{ color: "#787776" }}>[+]</strong><strong> Inhouse DNS</strong> *<em>New since May 2019</em>*:
                    Now using our own setup DNS Nameserver on every VPN location, <strong>no more external third-party
                      DNS</strong> involved<br />
                    <strong style={{ color: "#787776" }}>[+]</strong><strong> WireGuard VPN</strong> *<em>New since Oct
                      2019</em>*: Now as well offering the highly demanded new VPN protocol WireGuard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="middle2 flex-[.5]">



      </div>
      {/* <div class="flex mx-auto gap-8 mt-36">
        <div class="flex-[.25]">


          <div class="bg-white rounded-xl py-5 px-3  text-gray-900 mt-4">
            <div class="flex items-center gap-4">
              <img src={require("../assets/images/home/icon-1.png")} alt='' />
              <div>3 Day Money Back Guarantee</div>
            </div>
            <div class="flex items-center gap-4 mt-6">
              <img src={require("../assets/images/home/icon-3.png")} alt='' />
              <div>24/7 Support</div>
            </div>
          </div>
        </div>

        <div class="middle2 flex-[.5]">
          <h2>What is www.nVpn.net ?</h2>
          <p class="what_is_nvpn">- www.nVpn.net -<strong> </strong>provides a <strong>secure</strong> and
            <strong>private</strong> <strong>connection</strong> within a public network (e.g. the Internet). This
            connection is obtained through a method, called tunneling, where the data to be transferred is broken up into
            smaller 'packets' encrypted and are subsequently sent through the virtual tunnel created. The connection gets
            established via the Open Source Software<em> <strong>OpenVPN</strong></em> (or L2TP/IPsec(IKEv1/IKEv2), Squid
            &amp; Socks5 proxy). We provide by default <strong>a secure 256 Bit AES-CBC </strong> encrypted connection to
            our servers located all over the world where <strong>all</strong> traffic is directed through them! PLEASE
            NOTE: that if you do choose to use one of many free proxy services there is a great chance that your credit
            card and/or passwords will be subject to fraud because they log your activity!<br />
            <br />
            With nVpn.net you can anonymize and <strong>encrypt</strong> your <strong>entire</strong> Internet activities.
            Regardless, whether you like to simply browse, keep a blog, write e-mails / ftp, run a business, transfer
            money, download images, exchange files or chat, you will <strong>always</strong> be unobserved and safe.
          </p>
          <h2 class="h2_index_description"> What other...
            <br />
          </h2>

          <div class="box_content_r">
            <div class="box_content_t">
              <div class="box_content_b">
                <div class="box_content">
                  <h2>Benefits of using our nVpn service:</h2>
                  <p><strong style={{ color: "#787776" }}>[+]</strong> Provides an extra layer of safety and anonymity by hiding
                    your real IP address <br />
                    <strong style={{ color: "#787776" }}>[+]</strong> Use Skype, Yahoo and Google Talk in Middle East and Asia.
                    Visit censored/blocked websites in Iran, Qatar, China, Turkey and many more<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> Securely encrypted connection between your PC and the
                    Internet (<strong>256 Bit AES-CBC / SHA512</strong> as default and alternatively 128 Bit Blowfish-CBC
                    / SHA1)<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> Your ISP/office/school CANNOT monitor your activities <br />
                    <strong style={{ color: "#787776" }}>[+]</strong> We offer <strong>Shared IP</strong> or <strong>Dedicated
                      IP</strong> (*even <strong>Dynamic IPs</strong> as Upgrade possibility*)<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Unmetered bandwidth</strong> and
                    <strong>NO</strong> Speed throttling<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Portforward</strong> - open the ports of your
                    desire in our client area, ports are then opened instantly &amp; automatically <strong>without any
                      delay!</strong> (No more need to Portforward in your router.)<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Anti Port-Clash function:</strong> Even on Shared
                    IPs your chosen port(s) - and by that your assets - are safe. Two members can <strong>never
                      clash</strong> on the same port(s) at the same time<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>TCP/443</strong> Mode can be chosen from inside the
                    Members Area. Allows to bypass almost all University/Workplace/School Firewall restrictions (good for
                    places where OpenVPN's default UDP/1194 port is blocked) <br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Server Switch</strong> possibility in Members Area
                    - (1x FREE of charge) - change to 56 Countries (including 5181 IPs) in <strong>seconds</strong>, fully
                    automatic <strong>without any</strong> delay.<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> Instant setup and delivery to your mailbox, <strong>no need
                      to wait</strong>, pay and go, like in McDonalds drive by :)<br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Server Emergency function</strong>: Incase a Server
                    downtime occurs (a rare event) the affected Members receive a free Switch slot to another alternative
                    Country, as always <strong>fully automaticated</strong>. By this method: an <strong>alltime
                      100%</strong> Access is guaranteed. You will always be able to access another alternative Country,
                    incase the original Country is undergoing a downtime <strong>for more than 30-45 minutes.<br /></strong>
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>L2TP/IPsec</strong>(<strong>IKEv1</strong> and
                    <strong>IKEv2</strong>): Every subscription plan includes the L2TP/IPsec protocol in
                    <strong>BOTH</strong> variants as <strong>IKEv1</strong> or <strong>IKEv2</strong><br />
                    <strong style={{ color: "#787776" }}>[+]</strong> <strong>Squid and SOCKS5 Proxy*<em>New</em></strong>*:
                    Every subscription plan includes a Squid and a SOCKS5 proxy. More info what a Squid and a SOCKS5 proxy
                    is can be found in the knowledgebase.
                    Both Proxies are setup in a way to support SSL Encryption in combination with "<em>stunnel</em>"
                    making it an <strong>encrypted Proxy</strong><br />
                    <strong style={{ color: "#787776" }}>[+]</strong><strong> Anti DPI</strong> (Deep Packet Inspection):
                    Additional measurements to bypass DPI (for countries like China and its great firewall, Iran..) have
                    been setup using <strong>OpenVPN over SSL</strong> mode and/or with <strong>tls-crypt</strong> or via
                    <strong>Obfsproxy</strong><br />
                    <strong style={{ color: "#787776" }}>[+]</strong><strong> Inhouse DNS</strong> *<em>New since May 2019</em>*:
                    Now using our own setup DNS Nameserver on every VPN location, <strong>no more external third-party
                      DNS</strong> involved<br />
                    <strong style={{ color: "#787776" }}>[+]</strong><strong> WireGuard VPN</strong> *<em>New since Oct
                      2019</em>*: Now as well offering the highly demanded new VPN protocol WireGuard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-[.25]">
          <div id="box-sidebar2">
            <div class="box-white-r">
              <div class="box-white-t">
                <div class="box-white-b">
                  <div class="sidebox2">
                    <ul>
                      <div class="bgsidebg2">
                        <div class="three22">
                          <div id="twwet">
                            <div class="twitter_main_box">
                              <div class="each_tweet_div">Our Support area is offline since 3 days now due to a server
                                damage on the hoster's side. We are trying to resolve… <a rel="noreferrer" href="https://t.co/NxIxghAFiX"
                                  target="_blank" id="portForwardTutorialKBTextHereCSS"
                                  style={{ fontSize: "12px", color: "#957401", textDecoration: "none", fontWeight: "bold", letterSpacing: 0, fontFamily: "Arial" }}>https://t.co/NxIxghAFiX</a><br />
                                <p class="timePosted">03 July 2022, 00:00:00</p>
                              </div>
                            </div>
                            <div class="twitter_main_box">
                              <div class="each_tweet_div">The Website server had a technical issue almost all throughout the
                                day, which just has been fixed right now. Everything is back functional.<br />
                                <p class="timePosted">04 June 2022, 00:00:00</p>
                              </div>
                            </div>
                            <div class="twitter_main_box">
                              <div class="each_tweet_div">Since yesterday there is a big problem with connecting / resolving
                                our Hostname which is part of the config file. T… <a rel="noreferrer" href="https://t.co/1VRIMfMvQy" style={{ fontSize: "12px", color: "#957401", textDecoration: "none", fontWeight: "bold", letterSpacing: 0, fontFamily: "Arial" }}
                                  target="_blank" id="portForwardTutorialKBTextHereCSS"
                                >https://t.co/1VRIMfMvQy</a><br />
                                <p class="timePosted">06 June 2020, 00:00:00</p>
                              </div>
                            </div>
                            <div class="twitter_main_box_last">
                              <div class="each_tweet_div">Update: Hostname problem is resolved now, all systems back up
                                working. Important: Make sure to re-download your con… <a rel="noreferrer" href="https://t.co/wSWy4y9E5l" style={{ fontSize: "12px", color: "#957401", textDecoration: "none", fontWeight: "bold", letterSpacing: 0, fontFamily: "Arial" }}
                                  target="_blank" id="portForwardTutorialKBTextHereCSS"
                                >https://t.co/wSWy4y9E5l</a><br />
                                <p class="timePosted">06 June 2020, 00:00:00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="bgside6">
                        <div class="bgside_tweet">
                          <blockquote class="twitter-tweet twitter-tweet-error" data-lang="en"
                            data-twitter-extracted-i1666973964646834476="true">
                            <p lang="en" dir="ltr">Thank you <a href="https://twitter.com/nVpnNet">@nVpnNet</a> for donating
                              another $2,100 towards <a href="https://twitter.com/OSTIFofficial">@OSTIFofficial</a> audit of
                              <a href="https://twitter.com/OpenVPN">@OpenVPN</a>! I have added you to my blog post!
                            </p>—
                            That One Privacy Guy (@ThatPrivacyGuy) <a
                              href="https://twitter.com/ThatPrivacyGuy/status/807585485014978560">December 10, 2016</a>
                          </blockquote>
                        </div>
                      </div>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
}

export default Home;
