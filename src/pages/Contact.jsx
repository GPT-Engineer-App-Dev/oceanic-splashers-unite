import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-card p-8 rounded-lg shadow-md">
          <div className="space-y-4">
            <Input placeholder="Your Name" className="border-input focus:border-primary" />
            <Input type="email" placeholder="Your Email" className="border-input focus:border-primary" />
            <Input placeholder="Subject" className="border-input focus:border-primary" />
            <Textarea placeholder="Your Message" rows={5} className="border-input focus:border-primary" />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;