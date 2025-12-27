import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import type { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
  >
    <div className="relative h-48 overflow-hidden shrink-0">
      <img 
        src={activity.image} 
        alt={activity.title} 
        loading="lazy"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-pku-red shadow-sm">
        {activity.category.toUpperCase()}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <Calendar size={14} className="mr-2" />
        {activity.date}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pku-red transition-colors">
        {activity.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
        {activity.description}
      </p>
      {activity.link && (
        <a 
          href={activity.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-pku-red font-medium text-sm hover:underline mt-auto"
        >
          查看详情 <ArrowRight size={14} className="ml-1" />
        </a>
      )}
    </div>
  </motion.div>
);

export default ActivityCard;
