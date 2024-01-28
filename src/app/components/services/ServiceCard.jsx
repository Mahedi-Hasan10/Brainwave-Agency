import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({cardImage, cardBgColor}) => {
    return (
        <Card sx={{ maxWidth: 350 }} className={`${cardBgColor}`}>
            <CardActionArea className=''>
                <CardMedia
                className='px-[120px] py-[30px] h-[200px] '
                component="img"
                height="133px"
                width="118px"
                image={cardImage}
                alt="green iguana"
                />
                <CardContent className=' text-center'>
                   <h5 className="text-[24px] font-bold text-white">Graphic Design</h5>
                    <p className="text-[17px] leading-7 text-white mt-[15px]">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <button className='flex gap-2 mx-auto my-[43px]'>
                        <span className="text-[15px] font-bold text-white">Learn More</span>
                        <IoIosArrowRoundForward className="text-[15px] font-bold text-white"/>
                    </button>
                </CardContent>
            </CardActionArea>
    </Card>

    );
};

export default ServiceCard;