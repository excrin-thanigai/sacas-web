import Academics from "../components/blocks/departments/academics";
import Banner from "../components/blocks/departments/banner";
import DepartmentOverview from "../components/blocks/departments/departments-overview";
import OurFacultyDepartment from "../components/blocks/departments/our-faculty-department";

import Scholarship from "../components/blocks/departments/scholarship";
import StudentAchievements from "../components/blocks/departments/student-achievements";
import StudentTestimonial from "../components/blocks/departments/students-testimonial";

export const meta = () => {
  return [
    { title: "SACAS" },
    { name: "SACAS_Departments", content: "SACAS_Departments" },
  ];
};

export default function Events() {
  return (
    <div>
      <Banner />
      <DepartmentOverview />
      <Academics />
      <OurFacultyDepartment />
      <Scholarship />
      <StudentAchievements />
      <StudentTestimonial />
    </div>
  );
}
