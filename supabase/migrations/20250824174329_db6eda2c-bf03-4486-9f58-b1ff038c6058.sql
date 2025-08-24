-- Create a simple table for button clicks
CREATE TABLE public.button_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  clicked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.button_clicks ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert and view records
CREATE POLICY "Anyone can insert button clicks" 
ON public.button_clicks 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view button clicks" 
ON public.button_clicks 
FOR SELECT 
USING (true);