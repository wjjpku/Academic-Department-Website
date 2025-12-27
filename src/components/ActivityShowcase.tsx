import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';
import { activitiesConfig } from '../config';

const ActivityShowcase = () => {
  const { homeSection } = activitiesConfig;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            {homeSection.title}
          </h2>
          <div className="w-20 h-1 bg-pku-red mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {homeSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(activitiesConfig.activities || []).slice(0, 4).map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/activities" 
            className="inline-block px-8 py-3 border-2 border-pku-red text-pku-red font-bold rounded-full hover:bg-pku-red hover:text-white transition-colors duration-300"
          >
            {homeSection.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivityShowcase;
