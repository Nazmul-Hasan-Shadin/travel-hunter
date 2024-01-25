import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PrimaryHeader from "../../../shared/PrimaryHeader/PrimaryHeader";
import { MdKeyboardArrowDown } from "react-icons/md";



const Categories = () => {
    return (
        <div className="bg-[#101010] ">
            <PrimaryHeader heading={'ALL'} styleText={'CATEGORIES'} text={'Ready to travel the globe? Discovering new places and activities is simple with our flight booking service.'}></PrimaryHeader>
            
            {/* ==============categories============================= */}

            <Tabs>
 <div className="">

 <TabList className={' flex gap-12 w-[29%] lg:px-12 bg-white   mx-auto'} >
      <Tab className="flex "><button className="btn   bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Flight  <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
     <Tab className={'flex'}><button className="btn flex  bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Flight <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
       <Tab className={'flex'}><button className="btn   bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Flight <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
    </TabList>
 </div>


    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>  


        </div>
    );
};

export default Categories;