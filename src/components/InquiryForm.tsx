
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryForm = ({ isOpen, onClose }: InquiryFormProps) => {
  const [formData, setFormData] = useState({
    studentName: "",
    schoolName: "",
    seeGpa: "",
    program: "",
    contactNumber: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Student Inquiry - ${formData.studentName}`);
    const body = encodeURIComponent(`
Student Name: ${formData.studentName}
School Name: ${formData.schoolName}
SEE GPA: ${formData.seeGpa}
Program Choice: ${formData.program}
Contact Number: ${formData.contactNumber}

This inquiry was submitted through the website inquiry form.
    `);

    const mailtoLink = `mailto:info@adhaya.edu.np?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    alert('Thank you for your inquiry! Your default email client will open to send the inquiry.');
    onClose();
    setFormData({
      studentName: "",
      schoolName: "",
      seeGpa: "",
      program: "",
      contactNumber: ""
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <Card className="max-w-lg mx-4 relative max-h-screen overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl text-gray-800">Inquiry Form</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Name *
              </label>
              <Input
                value={formData.studentName}
                onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                School Name (SEE School) *
              </label>
              <Input
                value={formData.schoolName}
                onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEE GPA *
              </label>
              <Input
                type="number"
                step="0.01"
                min="0"
                max="4"
                value={formData.seeGpa}
                onChange={(e) => setFormData({...formData, seeGpa: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Program Choice *
              </label>
              <Select onValueChange={(value) => setFormData({...formData, program: value})} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="Management">Management</SelectItem>
                  <SelectItem value="Law">Law</SelectItem>
                  <SelectItem value="Humanities">Humanities</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number *
              </label>
              <Input
                type="tel"
                value={formData.contactNumber}
                onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Submit Inquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InquiryForm;
