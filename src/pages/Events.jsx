import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    title: "Summer Solstice Swim",
    date: "June 21, 2024",
    description: "Join us for a magical swim as we celebrate the longest day of the year.",
  },
  {
    title: "Coastal Challenge",
    date: "July 15, 2024",
    description: "A 5km open water swim along the beautiful coastline. Test your endurance!",
  },
  {
    title: "Moonlight Dip",
    date: "August 5, 2024",
    description: "Experience the thrill of night swimming under the full moon.",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-blue-600">{event.date}</p>
                <p className="mt-2 text-gray-600">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;