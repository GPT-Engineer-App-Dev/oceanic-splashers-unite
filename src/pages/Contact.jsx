import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-4">
            <Input placeholder="Your Name" className="border-blue-200 focus:border-primary" />
            <Input type="email" placeholder="Your Email" className="border-blue-200 focus:border-primary" />
            <Input placeholder="Subject" className="border-blue-200 focus:border-primary" />
            <Textarea placeholder="Your Message" rows={5} className="border-blue-200 focus:border-primary" />
            <Button type="submit" className="w-full bg-primary hover:bg-blue-600">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;