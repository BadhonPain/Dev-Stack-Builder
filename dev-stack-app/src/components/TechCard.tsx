import type { TechStack } from "../types/techStack";

interface TechCardProps {
    tech: TechStack;
    isSelected: boolean;
    onToggle: (tech: TechStack) => void;
}

const TechCard = ({ tech, isSelected, onToggle }: TechCardProps) => {
    return (
        <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        {tech.icon}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tech.badgeStyle}`}>
                        {tech.badge}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mt-4">
                    {tech.name}
                </h3>
                <p className="text-xs text-[#64748B] mt-2 leading-relaxed min-h-12">
                    {tech.description}
                </p>


                <div className="flex items-center gap-2 mt-4 text-xs">
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium">
                        {tech.category}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium">
                        {tech.level}
                    </span>
                    <span className="ml-auto font-bold text-gray-800 flex items-center gap-1">
                        <span className="text-amber-400">★</span> {tech.rating}
                    </span>
                </div>
            </div>


            <button
                onClick={() => onToggle(tech)}
                className={`mt-6 w-full py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${isSelected
                    ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                    : 'bg-[#0F172A] hover:bg-[#1E293B] text-white'
                    }`}
            >
                {isSelected ? 'Remove from Stack' : 'Add to Stack'}
            </button>
        </div>
    );
};

export default TechCard;