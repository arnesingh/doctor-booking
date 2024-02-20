import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CategorySearch = () => {
  return (
    <div className="mb-10 items-center flex flex-col gap-2">
      <h2 className="font-bold text-4xl">
        Search your <span className="text-primary">Doctor</span> here.
      </h2>

      <h2 className="text-gray-500 text-xl">
        Search your doctor and book an appointment in just one click!
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2 text-center">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default CategorySearch;
