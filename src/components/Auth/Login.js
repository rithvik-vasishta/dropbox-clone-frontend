import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import authService from "../../services/auth.service";
import { saveTokenToCookie } from "../../services/auth.helper";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setLError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await authService.login(email, password);
            const token = res.data.token;
            saveTokenToCookie(token);
            navigate('/upload');
        } catch (error) {
            setLError(error.response?.data?.errorMessage || "Login Fucked");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    Log In
                </button>
            </form>
        </div>
    )
}