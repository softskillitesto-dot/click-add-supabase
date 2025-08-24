import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const ButtonClick = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('button_clicks')
        .insert({});
      
      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "Button click recorded in database",
      });
    } catch (error) {
      console.error('Error inserting record:', error);
      toast({
        title: "Error",
        description: "Failed to record button click",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Button Click Tracker</h1>
        <Button 
          onClick={handleClick} 
          disabled={isLoading}
          size="lg"
        >
          {isLoading ? "Recording..." : "Click Me!"}
        </Button>
      </div>
    </div>
  );
};

export default ButtonClick;