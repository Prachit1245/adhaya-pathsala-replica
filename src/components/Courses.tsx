
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, Calculator, BookOpen, Scale } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "SCIENCE",
      icon: Microscope,
      description: "Comprehensive science education with Physics, Chemistry, Biology, and Mathematics",
      features: ["Laboratory Facilities", "Experienced Faculty", "Practical Learning", "Career Guidance"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "MANAGEMENT",
      icon: Calculator,
      description: "Business and management studies preparing students for the corporate world",
      features: ["Business Studies", "Economics", "Accounting", "Marketing"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "HUMANITIES",
      icon: BookOpen,
      description: "Liberal arts education focusing on human culture, literature, and social sciences",
      features: ["Literature", "History", "Sociology", "Psychology"],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "LAW",
      icon: Scale,
      description: "Foundation in legal studies and constitutional law for aspiring legal professionals",
      features: ["Constitutional Law", "Legal Studies", "Ethics", "Jurisprudence"],
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            +2 Programs Available
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive higher secondary programs designed to prepare you for university education and future careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className={`${course.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <course.icon className={course.iconColor} size={32} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  {course.description}
                </p>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${course.buttonColor} text-white`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join?</h3>
            <p className="text-gray-600 mb-6">Start your academic journey with us today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
