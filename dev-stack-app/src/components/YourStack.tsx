import type { TechStack } from "../types/techStack";

interface UserStackProps {
    selectedStack: TechStack[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}
const YourStack = ({ selectedStack, onRemove, onRemoveAll }: UserStackProps) => {
    return (
        <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-xs sticky top-24">
            <h3 className="text-xl font-bold text-[#0F172A]">Your Stack</h3>

            <p className="text-sm text-[#64748B] mt-1 mb-5">
                {selectedStack.length === 0
                    ? 'No technologies selected yet.'
                    : `${selectedStack.length} ${selectedStack.length === 1 ? 'Technology' : 'Technologies'} Selected`}
            </p>


            {selectedStack.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center">
                    <p className="text-sm text-gray-400">Your stack is empty.</p>
                </div>
            ) : (

                <div className="space-y-3">
                    {selectedStack.map((tech) => (
                        <div
                            key={tech.id}
                            className="border border-gray-100 rounded-xl p-3 flex items-center justify-between shadow-2xs"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    {tech.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[#0F172A]">{tech.name}</h4>
                                    <p className="text-xs text-[#64748B]">{tech.category}</p>
                                </div>
                            </div>


                            <button
                                onClick={() => onRemove(tech.id)}
                                className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                                aria-label={`Remove ${tech.name}`}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}


                    <button
                        onClick={onRemoveAll}
                        className="w-full mt-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};


export default YourStack;