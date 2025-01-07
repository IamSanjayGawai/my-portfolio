const SkillItem = ({ imgSrc, altText, skillName, bgColor }) => {
    return (
      <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform transform duration-300">
        <div className={`rounded-full p-3 shadow-lg ${bgColor}`}>
          <img src={imgSrc} alt={altText} className="w-12 h-12" />
        </div>
        <p className="text-lg font-semibold text-gray-700">{skillName}</p>
      </div>
    );
  };
  
  export default SkillItem