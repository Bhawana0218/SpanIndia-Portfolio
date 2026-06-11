import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Python & React Specialist",
  "Open Source Contributor",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export default Typewriter;
