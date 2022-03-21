import { useEffect, useState } from "react";

const fetchProfile = async () => {
  return await fetch("http://192.168.163.128:5000/p/get", {
    credentials: "include",
  }).then((res) => res.json());
};

const ProfilePage = () => {
  const [user, setUser] = useState({ name: "loading...", phone: "loading..." });

  useEffect(() => {
    fetchProfile().then((res) => {
      setUser(res);
    });
  });

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default ProfilePage;
