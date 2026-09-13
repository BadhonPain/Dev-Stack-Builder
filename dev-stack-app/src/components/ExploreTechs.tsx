import { Suspense, use, useState } from 'react';
import type { TechStack } from '../types/techStack';
import { getTechStackPromise } from '../data/techStackInfo';
import YourStack from './YourStack';
import TechCard from './TechCard';
import { toast } from 'react-toastify';

export interface ExploreTechsProps {
    technologies?: TechStack[];
}

export const LoadingFallback = () => (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center min-h-87.5">
        <div className="w-12 h-12 border-4 border-[#8B5CF6] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-wider animate-pulse">
            Loading.....
        </p>
        <p className="text-sm text-[#64748B] mt-2">Fetching technology stack data...</p>
    </div>
);

const ExploreTechsContent = ({ technologies }: ExploreTechsProps) => {
    const fetchedTechs = technologies ? null : use(getTechStackPromise());
    const techList = technologies ?? fetchedTechs ?? [];
    const [selectedStack, setSelectedStack] = useState<TechStack[]>([]);

    // Ensuring one tech stack per category
    const handleToggleTech = (tech: TechStack) => {
        const isAlreadySelected = selectedStack.some(
            (item) => item.id === tech.id
        );

        if (isAlreadySelected) {
            toast.warning(`${tech.name} is already in your stack.`);
            return;
        }

        const existingCategoryTech = selectedStack.find(
            (item) => item.category === tech.category
        );

        if (existingCategoryTech) {
            toast.info(
                `${existingCategoryTech.name} was replaced with ${tech.name}.`
            );

            setSelectedStack((prevStack) => [
                ...prevStack.filter(
                    (item) => item.category !== tech.category
                ),
                tech,
            ]);

            return;
        }

        toast.success(`${tech.name} added to your stack.`);

        setSelectedStack((prevStack) => [...prevStack, tech]);
    };

    // Remove a single item from the stack
    const handleRemoveFromStack = (techId: string) => {
        const removedTech = selectedStack.find((item) => item.id === techId);

        setSelectedStack((prevStack) =>
            prevStack.filter((item) => item.id !== techId)
        );

        if (removedTech) {
            toast.success(`${removedTech.name} removed from your stack.`);
        }
    };

    // Clear all items from the stack
    const handleRemoveAll = () => {
        setSelectedStack([]);
        toast.success('All technologies removed from your stack.');
    };

    return (
        <section id="technologies" className="max-w-7xl mx-auto px-6 py-12">

            <div className="mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
                    Explore the{' '}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EC4899] to-[#8B5CF6]">
                        Technologies
                    </span>
                </h2>
                <p className="text-[#64748B] mt-2 text-base">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {techList.map((tech) => (
                        <TechCard
                            key={tech.id}
                            tech={tech}
                            isSelected={selectedStack.some((item) => item.id === tech.id)}
                            onToggle={handleToggleTech}
                        />
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <YourStack
                        selectedStack={selectedStack}
                        onRemove={handleRemoveFromStack}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </section>
    );
};

const ExploreTechs = (props: ExploreTechsProps) => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <ExploreTechsContent {...props} />
        </Suspense>
    );
};

export default ExploreTechs;