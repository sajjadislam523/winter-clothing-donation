import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ cardData }) => {
    const { id, image, title, description, contactInfo, status, division } =
        cardData;
    return (
        <div className="p-4 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:scale-105 hover:shadow-xl">
            <img
                className="object-cover w-full h-40 rounded-md"
                src={image}
                alt={title}
            />
            <h1 className="mt-4 text-lg font-bold text-gray-800">{title}</h1>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {description}
            </p>
            <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">
                    <span className="font-semibold text-blue-700">
                        Contact:
                    </span>{" "}
                    {contactInfo}
                </p>
                <p className="text-sm font-medium text-gray-700">
                    <span className="font-semibold text-blue-700">Status:</span>{" "}
                    {status}
                </p>
                <p className="text-sm font-medium text-gray-700">
                    <span className="font-semibold text-blue-700">
                        Division:
                    </span>{" "}
                    {division}
                </p>
            </div>
            <Link
                to={`/donation-campaign/${id}`}
                className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
                Donate Now
            </Link>
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
