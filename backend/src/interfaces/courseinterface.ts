export interface courseInterface {
  id?: string;
  title: string;
  description: Text;
  content_type?: "text" | "video" | "image" | "mixed";
  category: string;
  created_by: number;
  file?: string;
  is_active?: boolean;
  profile_image?: string;
  module: number;
}
