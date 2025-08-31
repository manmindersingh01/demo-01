import { motion } from 'framer-motion';
import { experienceData } from '@/data/portfolio-data';

const Experience = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Over 9 years of experience in digital marketing across various industries
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot" />
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-muted-foreground mb-2">{job.company} | {job.period}</p>
              
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-2">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              
              {job.metrics && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {job.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-muted rounded-lg p-4">
                      <span className="data-metric">{metric.value}</span>
                      <p className="text-sm">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
