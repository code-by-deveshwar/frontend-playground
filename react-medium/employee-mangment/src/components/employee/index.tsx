import React, { useEffect, useState } from 'react'
import MoreInfoAboutEmployee from './employee-info';


type User = {
    id: number,
    name: string,
    username: string,
    email: string;
    website: string;
}

// https://jsonplaceholder.typicode.com/users
const index = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState<User | null>(null);



    const makeApiCall = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }


    const removeUser = (id: number) => {
        setUsers(prev => prev.filter(u => u.id !== id))
    }

    const selectUser = (user: any) => {
        console.log(user);

        setSelected(user);
    }

    const addUser = () => {
        const id = Math.max(0, ...users.map(u => u.id)) + 1;
        const newUser: User = {
            id,
            name: "New Employee",
            username: "new.emp",
            email: "new@demo.com",
            website: "demo.dev",

        };
        setUsers(prev => [newUser, ...prev]);

    }


    useEffect(() => {
        makeApiCall();
    }, [])

    if (loading) {
        return (
            <div className="mt-24 flex items-center justify-center text-lg">
                loading...
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col items-center mt-10 gap-8 md:flex-row md:items-start md:justify-center">
                {/* User list */}
                <div className="flex flex-col gap-4 w-96">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => selectUser(user)}
                            className="flex items-center justify-between p-4 rounded-xl bg-white shadow-sm border border-gray-200 
                   hover:shadow-md hover:border-blue-400 cursor-pointer transition-all duration-200"
                        >
                            <span className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
                                {user.name}
                            </span>
                            <button
                                className="text-red-500 hover:text-red-600 font-bold text-lg transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent selecting user on delete click
                                    removeUser(user.id);
                                }}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>

                {/* Details panel */}
                <div className="w-full md:w-[28rem] p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-inner">
                    {selected ? (
                        <MoreInfoAboutEmployee {...selected} />
                    ) : (
                        <div className="text-gray-500 italic text-center">
                            Select a user to see details
                        </div>
                    )}
                </div>
                <div className="mt-6 flex justify-center">
                    <button
                        className="bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm 
               hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 
               focus:ring-blue-400 focus:ring-offset-1 active:scale-95 transition-all duration-200"
                        onClick={addUser}
                    >
                        + Add Employee
                    </button>
                </div>

            </div>


        </>
    )
}

export default index