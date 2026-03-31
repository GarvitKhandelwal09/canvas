import  { useState } from "react";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Signup successful ✅");
        console.log("User:", data);

        // optional: clear form
    
        setEmail("");
        setPassword("");

        // optional: redirect to login
        // window.location.href = "/login";
      } else {
        setMessage(data.message || "Signup failed ❌");
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        {message && (
          <p className="mb-4 text-center text-red-500">{message}</p>
        )}

        <form onSubmit={handleSignup} className="flex flex-col gap-4">

       

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Signup
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;