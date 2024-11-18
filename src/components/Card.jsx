import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ cardData }) => {
    const { id, image, title, description, contactInfo, status, division } =
        cardData;
    return (
        <div className="p-4 border rounded-lg">
            <img className="w-full" src={image} alt="" />
            <h1 className="text-lg font-bold">{title}</h1>
            <p>{description}</p>
            <p>{contactInfo}</p>
            <p>{status}</p>
            <p>{division}</p>
            <Link to={`/donation-campaign/${id}`}>Donate Now</Link>
        </div>
    );
};

Card.propTypes = {
    cardData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        contactInfo: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        division: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
