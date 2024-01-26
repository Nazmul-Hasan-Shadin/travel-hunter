import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PrimaryHeader from "../../../../shared/PrimaryHeader/PrimaryHeader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoryTab from "../CategoriesTab/CategoryTab";



const Categories = () => {
    const [serviceData,setServiceData]=useState([])

       useEffect(()=>{
          axios.get('/carData.json')
          .then(data=> setServiceData(data.data))
       },[])

    const car=serviceData?.filter((car)=>car.category ==='car')
    console.log(car)


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
       <CategoryTab category={car}></CategoryTab>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>  


        </div>
    );
};

export default Categories;