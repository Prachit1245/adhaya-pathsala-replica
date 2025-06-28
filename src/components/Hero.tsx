
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Welcome to <span className="text-orange-500">Adhyaya</span>
                <br />
                <span className="text-teal-600">Pathshala</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Excellence in Education - Shaping Future Leaders Through Quality Higher Secondary Education in Science, Management, Law and Humanities.
              </p>
              <p className="text-lg text-gray-500">
                संस्कार सहितको शिक्षा - Empowering students with comprehensive +2 programs
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                JOIN NOW
              </Button>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3">
                Inquiry Open
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="text-orange-500" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-teal-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Faculty</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-orange-500" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-800">15+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="text-teal-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-800">4</div>
                <div className="text-sm text-gray-600">Faculties</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-teal-500 rounded-3xl p-8 transform rotate-3 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Students studying" 
                className="rounded-2xl w-full h-96 object-cover transform -rotate-3"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-orange-500">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
