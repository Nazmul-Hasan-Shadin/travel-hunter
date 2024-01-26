import React from 'react';
import CategoryCard from '../../../../component/CategoryCard/CategoryCard';

const CategoryTab = ({category}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10%] gap-8'>
            {
                category.slice(0,4).map((category,index)=> <CategoryCard 
                key={index} 
                category={category}>

                </CategoryCard> )
            }
        </div>
    );
};

export default CategoryTab;