import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const DonationCampaigns = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className="grid grid-cols-4 gap-4">
            {data.map((cardData) => (
                <Card key={cardData.id} cardData={cardData} />
            ))}
        </div>
    );
};

export default DonationCampaigns;
