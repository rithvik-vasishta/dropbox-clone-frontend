import React, {useState} from "react";
import authService from "../../services/auth.service";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Email", email);
            console.log("Password", password);
            console.log("UserName", userName);
            await authService.register(userName, email, password);
        } catch (error) {
            setError(error.response?.data?.errorMessage || "Register Fucked");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">User Name</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white">
                    Register
                </button>
            </form>
        </div>
    )
}