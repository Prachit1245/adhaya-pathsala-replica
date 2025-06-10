
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, DollarSign, Clock } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Application",
      description: "Fill out the admission application form with required documents",
      icon: FileText
    },
    {
      step: "2", 
      title: "Entrance Test",
      description: "Appear for the entrance examination as per your chosen faculty",
      icon: FileText
    },
    {
      step: "3",
      title: "Interview",
      description: "Attend the personal interview session with our admission committee",
      icon: Clock
    },
    {
      step: "4",
      title: "Enrollment",
      description: "Complete the enrollment process and fee payment",
      icon: DollarSign
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Admission Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Adhaya Pathshala and take the first step towards your academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {admissionSteps.map((step, index) => (
            <Card key={index} className="text-center bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <step.icon className="text-teal-600 mx-auto mb-4" size={32} />
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <Calendar className="text-orange-500 mr-3" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Application Opens</span>
                <span className="text-orange-500 font-semibold">March 1, 2024</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Application Deadline</span>
                <span className="text-orange-500 font-semibold">May 15, 2024</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Entrance Exam</span>
                <span className="text-orange-500 font-semibold">May 25, 2024</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Results Announcement</span>
                <span className="text-orange-500 font-semibold">June 5, 2024</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium">Classes Begin</span>
                <span className="text-orange-500 font-semibold">July 1, 2024</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <FileText className="text-teal-600 mr-3" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "SLC/SEE Certificate (Original & Copy)",
                "+2 or Equivalent Certificate (if applicable)",
                "Character Certificate",
                "Migration Certificate",
                "Passport Size Photographs (6 copies)",
                "Citizenship Certificate (Copy)",
                "Guardian's Citizenship Certificate (Copy)",
                "Medical Certificate"
              ].map((doc, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-orange-500 to-teal-600 text-white inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="mb-6">Download our application form and start your journey with us</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
                  Download Application
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 px-8">
                  Contact Admissions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
