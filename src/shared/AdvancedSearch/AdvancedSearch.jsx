import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./AdvanceSearch.css";
import PrimaryButton from "../../component/PrimaryButton/PrimaryButton";
import { MdOutlineLocationOn } from "react-icons/md";
const AdvancedSearch = () => {
  return (
    <div className="w-[64%] h-[278px]  mt-16 mx-auto text-white background-search ">
      <div className="flex  gap-12  relative p-6 ">
        <span className="text-sm ">CHOOSE CATEGORY</span>

        <div className="">
          <Tabs>
            <TabList
              className={
                "flex gap-8 bg-[#fff] mb-4 text-white font-medium p-[1px]"
              }
            >
              <Tab className={"bg-[#008080] px-[23px] py-2 rounded-[5px]"}>
                {" "}
                Car
              </Tab>
              <Tab className={"bg-[#008080] px-[23px] py-2 rounded-[5px]"}>
                Flight
              </Tab>
              <Tab className={"bg-[#008080] px-[23px] py-2 rounded-[5px]"}>
                Hotel
              </Tab>
              <Tab className={"bg-[#008080] px-[23px] py-2 rounded-[5px]"}>
                Boat
              </Tab>
            </TabList>

            <div>
              <TabPanel className={"flex justify-center"}>
                <div className="w-full absolute left-0 p-3">
                  <div className=" flex gap-4 space-y-2">
                    <div className="relative">
                       <span className="mb-2 inline-block">From</span>
                    <input
                     
                      type="text"
                      placeholder="Your loacation"
                      className="input input-bordered w-full px-10 max-w-xs "
                    />
                        <MdOutlineLocationOn className="absolute text-xl text-black top-2/4 left-4"/>
                    </div>

                

                    <div className="relative">
                       <span className="mb-2 inline-block">To</span>
                    <input
                     
                      type="text"
                      placeholder="Your loacation"
                      className="input input-bordered w-full px-10 max-w-xs "
                    />
                        <MdOutlineLocationOn className="absolute text-xl text-black top-2/4 left-4"/>
                    </div>

                                  <div className="relative">
                       <span className="mb-2 inline-block">Choose Your Car</span>
                    <input
                     
                      type="text"
                      placeholder="Your loacation"
                      className="input input-bordered w-full px-10 max-w-xs "
                    />
                        <MdOutlineLocationOn className="absolute text-xl text-black top-2/4 left-4"/>
                    </div>

                  </div>

                  {/*======== 2nd  div========= */}

                  <div className="flex items-center  gap-3">
                   
                <div>
               <span className="block "> No of Luggage</span>
                <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                </div>

                <div>
               <span className="block "> Pick-Up Date</span>
                <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                </div>


                <div>
               <span className="block "> Passenger</span>
                <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                </div>


                   <div>
                    <span className="block "> Passenger</span>
                   <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>

                   </div>

              
                  <div className="flex gap-2 pt-7">
                  <button onClick={onclick}  className='btn bg-[#008080] hover:bg-green-600 btn-md z-10 px-10 py-3 w-[153px]  text-white btn-outline'>Book Now</button> 
     

                  <button onClick={onclick}  className='btn bg-[#008080] hover:bg-green-600 btn-md z-10 px-0 py-3 w-[153px]  text-white btn-outline'>Search Now</button> 
                   
                    
                  </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>

        {/*  raido butoon */}
        <div className="flex gap-7 w-full  ">
          <div className="form-control">
            <label className="label p-0 cursor-pointer">
              <span className="label-text  text-white">One way</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
            </label>
          </div>

          <div className="form-control ">
            <label className="label cursor-pointer">
              <span className="label-text text-white">Round Tip</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
