import avatarImage from "../assets/avatar.png";
const Avatar = () => {
  // Array of technologies / items positioned around the center
  const techItems = [
    { name: "React", icon: "⚛️" },
    { name: "Tailwind", icon: "🌊" },
    { name: "WordPress", icon: "🤖" },
    { name: "MySQL", icon: "🐬" },
    { name: "Cloud computing", icon: "☁️" },
    { name: "Laravel", icon: "🦾" },
    { name: "Figma", icon: "🎨" },
  ];

  return (
    <div className="orbit-container">
      {/* Central Profile / Main Hub */}
      <div className="orbit-center">
        <div className="center-icon">
          <img src={avatarImage} alt="Avatar" />
        </div>
      </div>

      {/* Orbiting Ring Items */}
      <div className="orbit-ring">
        {techItems.map((item, index) => {
          // Calculate angle evenly around a circle (360 degrees / number of items)
          const angle = (index / techItems.length) * 360;

          return (
            <div
              key={index}
              className="orbit-item-wrapper"
              style={{ "--item-angle": `${angle}deg` }}
            >
              <div className="orbit-item" title={item.name}>
                <span className="item-icon">{item.icon}</span>
                <span className="item-tooltip">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Avatar;
