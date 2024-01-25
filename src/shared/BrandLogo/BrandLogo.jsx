import brandlogo1 from "../../assets/images/brand/FedExLogo.svg"
import brandlogo2 from "../../assets/images/brand/Hubspot Logo.svg"
import brandlogo3 from "../../assets/images/brand/logo.png"
import brandlogo4 from "../../assets/images/brand/logo1.svg"
import brandlogo5 from "../../assets/images/brand/Walmart Logo.svg"
const BrandLogo = () => {
    return (
        <div className=" hidden lg:block bg-[#008080] ">
            <div className="flex gap-20 justify-center py-9 ">
                <img src={brandlogo1} alt="" />
                <img src={brandlogo2} alt="" />
                <img src={brandlogo3} alt="" />
                <img src={brandlogo4} alt="" />
                <img src={brandlogo5} alt="" />
                </div>
        </div>
    );
};

export default BrandLogo;