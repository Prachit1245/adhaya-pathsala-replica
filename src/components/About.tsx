
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide quality education that nurtures intellectual growth and character development"
    },
    {
      icon: Users,
      title: "Our Vision",
      description: "To be a leading educational institution producing skilled and ethical professionals"
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, integrity, innovation, and commitment to student success"
    }
  ];

  const achievements = [
    "Government Affiliated Institution",
    "Experienced Faculty Members",
    "Modern Infrastructure",
    "State-of-the-art Laboratories",
    "Digital Learning Resources",
    "Career Counseling Services"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-orange-500">Adhaya Pathshala</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Adhaya Pathshala is a premier educational institution dedicated to providing excellence in higher secondary education. We offer comprehensive +2 programs in Science, Management, Humanities, and Law, designed to prepare students for successful university education and meaningful careers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to "सरकार सहित्को शिक्षा" reflects our dedication to government-affiliated, quality education that meets national standards while fostering innovation and critical thinking.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
              alt="Students in classroom" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            
            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500 bg-orange-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <value.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
