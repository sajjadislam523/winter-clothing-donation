import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const DonationCampaigns = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className="grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-blue-50">
            {data.map((cardData) => (
                <Card key={cardData.id} cardData={cardData} />
            ))}
        </div>
    );
};

export default DonationCampaigns;
