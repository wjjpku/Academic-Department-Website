import ActivityCard from './ActivityCard';
import { activitiesConfig } from '../config';

const ActivityShowcase = () => {
  const { homeSection } = activitiesConfig;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 dark:text-gray-100 mb-4 tracking-tightish">
            {homeSection.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pku-red to-pku-red-light mx-auto rounded-full" />
          <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {homeSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(activitiesConfig.activities || []).slice(0, 4).map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityShowcase;
