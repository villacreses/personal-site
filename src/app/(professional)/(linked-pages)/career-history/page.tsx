import { ExperienceList } from '@/components';
import { careerContent } from '../../content';

export default function CareerHistory() {
  return (
    <main>
      {careerContent.map(({heading, items}) => (
        <section key={heading} className="page-section">
          <h2 className="section-header">
            {heading}
          </h2>
          <ExperienceList items={items} />
        </section>
      ))}
    </main>
  );
}