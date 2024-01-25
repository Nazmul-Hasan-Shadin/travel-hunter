import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PrimaryHeader from "../../../shared/PrimaryHeader/PrimaryHeader";
import 'react-tabs/style/react-tabs.css';


const Categories = () => {
    return (
        <div>
            <PrimaryHeader heading={'ALL'} styleText={'CATEGORIES'} text={'Ready to travel the globe? Discovering new places and activities is simple with our flight booking service.'}></PrimaryHeader>
            
            {/* ==============categories============================= */}

            <Tabs>
 <div className="bg-white">

 <TabList className={'w-[29%] mx-auto bg-white'} >
      <Tab><button className="btn bg-[#00C9C9]">Car</button></Tab>
     <Tab><button className="btn bg-[#00C9C9]">Flight</button></Tab>
       <Tab><button className="btn bg-[#00C9C9]">Hotel</button></Tab>
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