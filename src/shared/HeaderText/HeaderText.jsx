import PrimaryButton from "../../component/PrimaryButton/PrimaryButton";


const HeaderText = () => {
    return (
        <div className="w-[64%]  text-white space-y-3 pt-14  lg:pl-[184px] " >
        <h1 className="text-6xl"> Start your <span className="text-[#00C9C9]"> unforgettable </span>
<br />journey with us. </h1> 
<p className="text-2xl">The best travel for your jouney begins now</p>
  
  <div className="relative">

<input   type="text" placeholder="Email here" className="input  input-bordered input-md w-full max-w-xs text-black  opacity-[0.1] bg-[#FFF]" />


<div className="absolute  lg:right-12 top-0 lg:w-[300px] ">
<button onClick={onclick}  className='btn w-[111px] bg-[#008080] hover:bg-green-600 btn-md z-10 rounded-[50px]  text-white btn-outline  '>Get Quote</button> 
</div>
     
  </div>
        </div>
    );
};

export default HeaderText;