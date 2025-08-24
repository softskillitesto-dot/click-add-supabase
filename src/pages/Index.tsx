import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground mb-8">Start building your amazing project here!</p>
        <Button asChild>
          <Link to="/button-click">Go to Button Click Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
