import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const AdvancedSearch = () => {
    return (
        <div className='w-[62%] mx-auto'>
             <div className='flex  gap-12'>
                <p>CHOOSE CATEGORY</p>
                 <div>
                 <Tabs>
    <TabList>
      <Tab> Car</Tab>
      <Tab>Flight</Tab>
      <Tab>Hotel</Tab>
      <Tab>Boat</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
 {/*  raido butoon */}
  <div>
  <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Red pill</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
  </label>
</div>

<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Red pill</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
  </label>
</div>
  </div>
                 </div>

             </div>
             <div></div>
             <div></div>
        </div>
    );
};

export default AdvancedSearch;