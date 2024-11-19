import Swal from "sweetalert2";

const DonationDetails = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            icon: "success",
            title: "Thank you!",
            text: "We will reach your destination soon.",
            timer: 2000,
            showConfirmButton: false,
        });
    };

    return (
        <div className="px-4 py-8 space-y-8 bg-blue-50">
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800">
                    Donation Form
                </h2>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Quantity of Items
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="e.g., 2"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="itemType"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Item Type
                        </label>
                        <select
                            id="itemType"
                            name="itemType"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        >
                            <option value="">Select an item type</option>
                            <option value="blanket">Blanket</option>
                            <option value="jacket">Jacket</option>
                            <option value="sweater">Sweater</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="pickupLocation"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Pickup Location
                        </label>
                        <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="additionalNotes"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Additional Notes (Optional)
                        </label>
                        <textarea
                            id="additionalNotes"
                            name="additionalNotes"
                            rows="4"
                            placeholder="Write any additional notes here..."
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Submit Donation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonationDetails;
