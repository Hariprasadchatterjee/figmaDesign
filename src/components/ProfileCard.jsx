
const ProfileCircle = ({ src, className = '', style = {} }) => (
  <div 
    className={`absolute aspect-square rounded-full border-[4px] border-white overflow-hidden shadow-xl w-24 md:w-32 lg:w-40 transition-transform duration-300 hover:scale-110 hover:z-30 ${className}`}
    style={style}
  >
    <img 
      src={src} 
      alt="Team member" 
      className="w-full h-full object-cover" 
    />
  </div>
);

const ProfileClusterSection = () => {
  const profiles = [
    
    { src: "/hero/1.png", top: "55%", left: "10%", z: "z-10" }, 
    { src: "/hero/2.png", top: "10%", left: "15%", z: "z-20" }, 

    
    { src: "/hero/3.png", top: "12%", left: "35%", z: "z-10" },
    { src: "/hero/4.png", top: "50%", left: "42%", z: "z-10" },

   
    { src: "/hero/5.png", top: "15%", left: "58%", z: "z-10" },
    { src: "/hero/6.png" , top: "45%", left: "64%", z: "z-20" }, 

   
    { src: "/hero/7.png", top: "10%", left: "82%", z: "z-10" },
    { src: "/hero/8.png", top: "54%", left: "92%", z: "z-10" },
  ];

  return (
    <section className="relative w-full h-[100px] md:h-[200px] mt-20 mb-20 overflow-visible">
      
        {profiles.map((profile, index) => (
          <ProfileCircle 
            key={index} 
            src={profile.src} 
            className={profile.z}
            style={{ 
              top: profile.top, 
              left: profile.left,
              transform: 'translate(-50%, -50%)' 
            }} 
          />
        ))}
    
    </section>
  );
};

export default ProfileClusterSection;