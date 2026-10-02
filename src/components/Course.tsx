import { dishes } from "@/data/dishes";
import CourseDish from "./CourseDish";

export default function Course() {
  return (
    <section id="course" aria-labelledby="course-heading">
      <h2 id="course-heading" className="sr-only">
        Course
      </h2>
      {dishes.map((dish, index) => (
        <CourseDish key={dish.number} dish={dish} index={index} />
      ))}
    </section>
  );
}
