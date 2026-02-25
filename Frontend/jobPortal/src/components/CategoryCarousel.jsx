import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Data Science",
  "Data Analyst",
  "Machine Learning Engineer",
  "Graphic Designer",
  "UI/UX Designer",
  "Digital Marketing",
  "Content Writer",
  "Product Manager",
  "DevOps Engineer",
  "Cloud Engineer",
  "Mobile App Developer",
  "Cyber Security",
  "Software Tester",
  "Business Analyst",
  "HR Recruiter",
  "Sales Executive",
  "Network Engineer",
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outline" className="rounded-full">
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
