type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
};

type Props = User;

const MoreInfoAboutEmployee = ({ id, name, username, email, website }: Props) => {
    return (
        <div className="w-full max-w-md mx-auto rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                👤 Employee Details
            </h2>
            <div className="space-y-2 text-gray-700">
                <p>
                    <span className="font-medium text-gray-900">ID:</span> {id}
                </p>
                <p>
                    <span className="font-medium text-gray-900">Name:</span> {name}
                </p>
                <p>
                    <span className="font-medium text-gray-900">Username:</span> {username}
                </p>
                <p>
                    <span className="font-medium text-gray-900">Email:</span>{" "}
                    <a
                        href={`mailto:${email}`}
                        className="text-blue-600 hover:underline break-words"
                    >
                        {email}
                    </a>
                </p>
                <p>
                    <span className="font-medium text-gray-900">Website:</span>{" "}
                    <a
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-words"
                    >
                        {website}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default MoreInfoAboutEmployee;
