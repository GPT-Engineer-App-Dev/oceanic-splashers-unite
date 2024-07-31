import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const events = [
  {
    title: "Summer Solstice Swim",
    date: "June 21, 2024",
    description: "Join us for a magical swim as we celebrate the longest day of the year.",
  },
  {
    title: "Cross-Bay Challenge",
    date: "July 15, 2024",
    description: "Test your endurance in our annual cross-bay swimming event.",
  },
  {
    title: "Moonlight Swim",
    date: "August 10, 2024",
    description: "Experience the tranquility of night swimming under the full moon.",
  },
];

const EventsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
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

export default EventsSection;